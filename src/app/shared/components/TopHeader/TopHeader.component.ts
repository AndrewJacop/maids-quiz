import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { SearchBarComponent } from '../SearchBar/SearchBar.component';

@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [CommonModule, SearchBarComponent],
  templateUrl: './TopHeader.component.html',
})
export class TopHeaderComponent implements OnInit {
  ngOnInit(): void {}
}
