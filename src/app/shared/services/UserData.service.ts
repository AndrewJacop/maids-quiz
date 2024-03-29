import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable, of, tap } from 'rxjs';
import { PageApiResponse } from '../../core/models/PageApiResponse';
import { UserApiResponse } from '../../core/models/UserApiResponse';
import { CacheService } from './Cache.service';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private BASE_API_URL: string = `${environment.baseUrl}`;
  UsersData: PageApiResponse = {} as PageApiResponse;
  searchQuery: string = '';

  constructor(
    private httpClient: HttpClient,
    private cacheService: CacheService
  ) {}
  getUsers(page: number): Observable<PageApiResponse> {
    const url: string = this.BASE_API_URL + '?page=' + page;
    const cachedDate = this.cacheService.get(url);
    if (cachedDate) return of(cachedDate);
    return this.httpClient.get<PageApiResponse>(url).pipe(
      tap((data) => {
        this.cacheService.put(url, data);
      })
    );
  }

  getUserById(id: number): Observable<UserApiResponse> {
    const url: string = `${this.BASE_API_URL}/${id}`;
    const cachedDate = this.cacheService.get(url);
    if (cachedDate) return of(cachedDate);
    return this.httpClient.get<UserApiResponse>(url).pipe(
      tap((data) => {
        this.cacheService.put(url, data);
      })
    );
  }
}
