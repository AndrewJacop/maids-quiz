import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../../shared/layouts/MainLayout/MainLayout.component';
import { UsersComponent } from '../../features/Users/Users.component';
import { UserDetailsComponent } from '../../features/UserDetails/UserDetails.component';
import { NotFoundComponent } from '../../shared/components/NotFound/NotFound.component';

export const routes: Routes = [
  { path: '', redirectTo: '/users/page/1', pathMatch: 'full' },
  {
    path: 'users',
    component: MainLayoutComponent,
    children: [
      { path: 'page/:id', component: UsersComponent },
      { path: 'details/:id', component: UserDetailsComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
