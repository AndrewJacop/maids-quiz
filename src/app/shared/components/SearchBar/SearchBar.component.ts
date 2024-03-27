import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './SearchBar.component.html',
})
export class SearchBarComponent implements OnInit {

  ngOnInit(): void { }

}
