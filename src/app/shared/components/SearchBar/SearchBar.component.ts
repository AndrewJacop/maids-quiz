import { CommonModule } from '@angular/common';
import { Component, OnDestroy, type OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../core/models/User';
import { Router, RouterLink } from '@angular/router';
import { UserDataService } from '../../services/UserData.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './SearchBar.component.html',
})
export class SearchBarComponent implements OnInit, OnDestroy {
  searchResult: User = {} as User;
  currentSubs: Subscription[] = [] as Subscription[];
  searchQuery: string | null = null;
  ddVisible: boolean;

  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) {
    this.ddVisible = false;
  }

  ngOnInit(): void {
    this.updateSearchList(this.searchQuery);
  }
  updateSearchList(searchQuery: string | null) {
    if (Number(searchQuery))
      this.currentSubs.push(
        this.userDataService
          .getUserById(Number(searchQuery))
          .subscribe((data) => {
            this.searchResult = data.data;
          })
      );
    else this.searchQuery = null;
  }

  searchType() {
    this.updateSearchList(this.searchQuery);
    this.ddVisible = true;
  }
  hideDD() {
    if (!this.searchQuery) this.ddVisible = false;
  }

  navToDetails(id: number) {
    this.router.navigate(['/users/details', id]);
    this.searchQuery = null;
    this.hideDD();
  }
  ngOnDestroy(): void {
    this.currentSubs.map((s) => s.unsubscribe());
    this.searchQuery = null;
    this.ddVisible = false;
  }
}
