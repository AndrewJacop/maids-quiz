import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../../shared/layouts/MainLayout/MainLayout.component';
import { UsersComponent } from '../../features/Users/Users.component';
import { UserDetailsComponent } from '../../features/UserDetails/UserDetails.component';
import { NotFoundComponent } from '../../shared/components/NotFound/NotFound.component';

export const routes: Routes = [
  {
    path: '/',
    component: MainLayoutComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'users/:id', component: UserDetailsComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
