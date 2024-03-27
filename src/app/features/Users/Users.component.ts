import { CommonModule } from '@angular/common';
import { Component, OnDestroy, type OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageApiResponse } from '../../core/models/PageApiResponse';
import { UserDataService } from '../../shared/services/UserData.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './Users.component.html',
})
export class UsersComponent implements OnInit, OnDestroy {
  users: PageApiResponse = {} as PageApiResponse;
  currentSub: Subscription = new Subscription();

  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateData();
  }

  updateData(): void {
    this.currentSub = this.userDataService.getUsers(1).subscribe((data) => {
      this.users = data;
    });
  }

  navToDetails(id: number) {
    this.router.navigate(['/users', id]);
  }

  ngOnDestroy(): void {
    this.currentSub.unsubscribe();
  }
}
