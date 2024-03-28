import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageApiResponse } from '../../core/models/PageApiResponse';
import { UserDataService } from '../../shared/services/UserData.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './Users.component.html',
})
export class UsersComponent implements OnInit, OnDestroy {
  users: PageApiResponse = {} as PageApiResponse;
  currentSubs: Subscription[] = [] as Subscription[];
  currentPage: number = 1;

  constructor(
    private userDataService: UserDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateData();
  }

  updateData(): void {
    this.currentSubs.push(
      this.activatedRoute.params.subscribe((params) => {
        this.currentPage = Number(params['id']);
        this.currentSubs.push(
          this.userDataService.getUsers(this.currentPage).subscribe((data) => {
            this.users = data;
          })
        );
      })
    );
  }

  navToDetails(id: number) {
    this.router.navigate(['/users/details', id]);
  }

  ngOnDestroy(): void {
    this.currentSubs.forEach((s) => s.unsubscribe());
  }
}
