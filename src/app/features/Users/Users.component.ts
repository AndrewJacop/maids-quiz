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
export class UsersComponent implements OnInit {
  users: PageApiResponse = {} as PageApiResponse;
  currentSub: Subscription[] = [] as Subscription[];
  currentPage: number = 1;
  isLoading: Boolean = true;

  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.UpdatePageData();
  }

  UpdatePageData() {
    this.userDataService.getUsers(this.currentPage).subscribe((data) => {
      this.users = data;
      this.isLoading = false;
    });
  }

  navToDetails(id: number) {
    this.router.navigate(['/users/details', id]);
  }

  pageChangeEvent(event: number) {
    if (event > 0 && event <= this.users.total_pages) {
      console.log(event);
      this.currentPage = event;
      this.UpdatePageData();
    }
  }
}
