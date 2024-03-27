import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './UserDetails.component.html',
})
export class UserDetailsComponent implements OnInit {

  ngOnInit(): void { }

}
