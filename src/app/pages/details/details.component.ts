import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iObjectApi } from 'src/app/interfaces/objet-api';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  login = this.route.snapshot.paramMap.get('id') as string;
  user: any;
  api_key: string = '';
  allUsers: Array<iObjectApi> = [];
  indexCurrentUser: number = 0;
  constructor(
    public storeService: StoreService,
    private route: ActivatedRoute
  ) {
    console.log('Carga detalles');
  }

  addPropertyArr() {
    const newArr = this.allUsers.map(
      (item: any, index) => (item = { ...item, index: index })
    );
    this.allUsers = newArr;
  }
  checkIndex(name: string) {
    const indexUser = this.allUsers.findIndex(
      (item: any, index) => item.login === name
    );
    return indexUser;
  }

  nextUser(name: string) {
    console.log(this.indexCurrentUser + 1);
    const nextUser = this.allUsers.map(
      (item: any, index) => item.index === this.indexCurrentUser + 1
    );
    this.user = nextUser;
  }

  previousUser(user: string) {
    console.log(this.allUsers, 'ALLUSERS');
    console.log(this.indexCurrentUser - 1);
    const prevUser = this.allUsers.find(
      (item: any, index) => item.index === this.indexCurrentUser - 1
    );
    this.user = prevUser;
  }
  ngOnInit(): void {
    this.storeService.getDataApi().subscribe((data) => (this.user = data));
    this.storeService.getProfile(this.login as string);
    this.storeService.getApikey().subscribe((data) => (this.api_key = data));
    this.storeService.getDataApi().subscribe((data) => (this.allUsers = data));
    this.addPropertyArr();
    this.indexCurrentUser = this.checkIndex(this.login);
  }
}
