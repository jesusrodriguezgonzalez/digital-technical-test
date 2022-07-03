import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { iObjectApi } from '../interfaces/objet-api';
import { iResponseApi } from '../interfaces/responseApi';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private $apiKey: BehaviorSubject<string>;
  private $dataApi: BehaviorSubject<Array<iObjectApi>>;

  constructor(private apiService: ApiService) {
    this.$apiKey = new BehaviorSubject('' as string);
    this.$dataApi = new BehaviorSubject([] as Array<iObjectApi>);
  }

  setApiKey(apikey: string) {
    this.$apiKey.next(apikey);
  }

  getApikey() {
    return this.$apiKey;
  }

  getAllData(api_key: string) {
    this.apiService.getAllData(api_key).subscribe((data) => {
      this.$dataApi.next(data.object);
    });
    return this.$dataApi.asObservable();
  }
}
