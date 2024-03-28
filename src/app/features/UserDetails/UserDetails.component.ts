import { CommonModule, Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserDataService } from '../../shared/services/UserData.service';
import { User } from '../../core/models/User';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './UserDetails.component.html',
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user: User = {} as User;
  currentId: number = 0;
  currentSubs: Subscription[] = [] as Subscription[];

  constructor(
    private userDataService: UserDataService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.updateData();
  }

  updateData(): void {
    this.currentSubs.push(
      this.activatedRoute.params.subscribe((params) => {
        this.currentId = Number(params['id']);
        this.currentSubs.push(
          this.userDataService
            .getUserById(this.currentId.toString())
            .subscribe((data) => {
              this.user = data.data;
            })
        );
      })
    );
  }

  goBack() {
    // this.location.back();
  }

  ngOnDestroy(): void {
    this.currentSubs.forEach((s) => s.unsubscribe());
  }
}
