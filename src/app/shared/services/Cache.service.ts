import { Injectable } from '@angular/core';
import { PageApiResponse } from '../../core/models/PageApiResponse';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache: Map<string, any> = new Map();
  constructor() {}
  put(url: string, response: PageApiResponse) {
    this.cache.set(url, response);
  }
  get(url: string) {
    this.cache.get(url);
  }
  clear(url: string) {
    this.cache.clear();
  }
}
