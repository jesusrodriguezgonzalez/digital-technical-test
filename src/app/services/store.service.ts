import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private $apiKey: BehaviorSubject<string>;

  constructor() {
    this.$apiKey = new BehaviorSubject('' as string);
  }

  setApiKey(apikey: string) {
    this.$apiKey.next(apikey);
  }

  getApikey() {
    return this.$apiKey;
  }
}
