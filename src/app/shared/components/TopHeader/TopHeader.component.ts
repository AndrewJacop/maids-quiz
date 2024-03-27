import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './TopHeader.component.html',
})
export class TopHeaderComponent implements OnInit {

  ngOnInit(): void { }

}
