import { Injectable } from '@angular/core';
import { PageApiResponse } from '../../core/models/PageApiResponse';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache: Map<string, any> = new Map();
  constructor() {}
  put(url: string, response: PageApiResponse) {
    console.log('cache not found!');
    return this.cache.set(url, response);
  }
  get(url: string) {
    console.log('cache found!');
    return this.cache.get(url);
  }
  clear(url: string) {
    return this.cache.clear();
  }
}
