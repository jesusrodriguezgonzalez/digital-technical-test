import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  api_key: any = '';
  constructor(private router: Router, public apikeyService: StoreService) {}

  ngOnInit(): void {
    this.api_key = this.apikeyService.getApikey().value;
    console.log(this.api_key, 'PRUEBAS');
  }
}
