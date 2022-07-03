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
  setDataApi(data: iObjectApi[]) {
    console.log(data);
    this.$dataApi.next(data);
  }

  getApikey() {
    return this.$apiKey;
  }
  getDataApi() {
    return this.$dataApi;
  }

  getAllData(api_key: string) {
    this.apiService.getAllData(api_key).subscribe((data) => {
      this.$dataApi.next(data.object);
    });
    return this.$dataApi.asObservable();
  }

  getProfile(login: string) {
    console.log(login, 'STORE');
    this.apiService.getProfile(login).subscribe((data) => {
      this.$dataApi.next(data);
    });
    return this.$dataApi.asObservable();
  }
}
