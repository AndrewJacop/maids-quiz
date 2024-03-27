import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from '../../components/TopHeader/TopHeader.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopHeaderComponent],
  templateUrl: './MainLayout.component.html',
})
export class MainLayoutComponent implements OnInit {
  ngOnInit(): void {}
}
