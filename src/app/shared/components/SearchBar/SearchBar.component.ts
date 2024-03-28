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
  searchResults: User[] = [] as User[];
  currentSubs: Subscription[] = [] as Subscription[];

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.currentSubs.push(
      this.userDataService.getUsers(1).subscribe((data) => {
        this.searchResults = data.data;
      })
    );
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }
}
