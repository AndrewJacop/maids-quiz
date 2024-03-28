import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, of } from 'rxjs';
import { PageApiResponse } from '../../core/models/PageApiResponse';
import { UserApiResponse } from '../../core/models/UserApiResponse';
import { CacheService } from './Cache.service';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private BASE_API_URL: string = `${environment.baseUrl}`;
  UsersData: PageApiResponse = {} as PageApiResponse;

  constructor(
    private httpClient: HttpClient,
    private cacheService: CacheService
  ) {
    this.getUsers(1).subscribe((fetchedData) => {
      this.UsersData = fetchedData;
    });
  }
  getUsers(pageIndex: number): Observable<PageApiResponse> {
    const url: string = `${this.BASE_API_URL}?pages=${pageIndex}`;
    const cachedDate = this.cacheService.get(url);
    if (cachedDate) return of(cachedDate);

    return this.httpClient.get<PageApiResponse>(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  getUserById(id: string): Observable<UserApiResponse> {
    const url: string = `${this.BASE_API_URL}/${id}`;
    const cachedDate = this.cacheService.get(url);
    if (cachedDate) return of(cachedDate);
    return this.httpClient.get<UserApiResponse>(url);
  }
}
