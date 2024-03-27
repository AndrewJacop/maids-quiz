import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './LoadingBar.component.html',
})
export class LoadingBarComponent implements OnInit {

  ngOnInit(): void { }

}
