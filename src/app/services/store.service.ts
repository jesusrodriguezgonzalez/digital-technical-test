import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { iObjectApi } from '../interfaces/objet-api';
import { iResponseApi } from '../interfaces/responseApi';
import { ApiService } from './api.service';

const mockUser = {
  login: '',
  id: 0,
  node_id: '',
  avatar_url: '',
  gravatar_id: '',
  url: '',
  html_url: '',
  followers_url: '',
  following_url: '',
  gists_url: '',
  starred_url: '',
  subscriptions_url: '',
  organizations_url: '',
  repos_url: '',
  events_url: '',
  received_events_url: '',
  type: '',
  site_admin: false,
  score: 0,
};
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private $apiKey: BehaviorSubject<string>;
  private $dataApi: BehaviorSubject<Array<iObjectApi>>;
  private $datApiUser: BehaviorSubject<iObjectApi>;

  constructor(private apiService: ApiService) {
    this.$apiKey = new BehaviorSubject('' as string);
    this.$dataApi = new BehaviorSubject([] as Array<iObjectApi>);
    this.$datApiUser = new BehaviorSubject({} as iObjectApi);
  }

  setApiKey(apikey: string) {
    this.$apiKey.next(apikey);
  }
  setDataApi(data: iObjectApi[]) {
    this.$dataApi.next(data);
  }

  getApikey() {
    return this.$apiKey;
  }
  getDataApi() {
    return this.$dataApi;
  }
  getDataUser() {
    return this.$datApiUser;
  }

  getAllData(api_key: string) {
    this.apiService.getAllData(api_key).subscribe((data) => {
      this.$dataApi.next(data.object);
    });
  }

  getProfile(login: string) {
    this.apiService.getProfile(login).subscribe((data) => {
      this.$datApiUser.next(data);
    });
  }
}
