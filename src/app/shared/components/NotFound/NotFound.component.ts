import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './NotFound.component.html',
})
export class NotFoundComponent implements OnInit {

  ngOnInit(): void { }

}
