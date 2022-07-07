import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  api_key: string = '';
  users: any = [];
  p: any = '';

  constructor(private router: Router, public storeService: StoreService) {}

  ngOnInit(): void {
    this.api_key = this.storeService.getApikey().value;
    this.users = this.storeService.getDataApi().value;
    this.storeService.getDataApi().subscribe((data) => (this.users = data));
    this.storeService.getAllData(this.api_key);
  }
}
