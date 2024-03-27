import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Users.component.html',
})
export class UsersComponent implements OnInit {

  ngOnInit(): void { }

}
