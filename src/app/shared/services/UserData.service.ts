import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { PageApiResponse } from '../../core/models/PageApiResponse';
import { UserApiResponse } from '../../core/models/UserApiResponse';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private BASE_API_URL: string = `${environment.baseUrl}`;
  UsersData: PageApiResponse = {} as PageApiResponse;

  constructor(private httpClient: HttpClient) {
    this.getUsers(1).subscribe((fetchedData) => {
      this.UsersData = fetchedData;
    });
  }
  getUsers(pageIndex: number): Observable<PageApiResponse> {
    return this.httpClient.get<PageApiResponse>(
      `${this.BASE_API_URL}?pages=${pageIndex}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
  getUserById(id: string): Observable<UserApiResponse> {
    return this.httpClient.get<UserApiResponse>(`${this.BASE_API_URL}/${id}`);
  }
}
