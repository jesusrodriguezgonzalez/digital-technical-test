import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  today: string = '';
  api_key: string | Int32Array = '';
  currentDate: string | undefined = '';

  constructor(
    private datePipe: DatePipe,
    private router: Router,
    public storeService: StoreService
  ) {}

  hashMd5(date: string) {
    const md5 = new Md5();
    this.api_key = md5.appendStr(date!).end();
  }
  onKeyUps(event: any) {
    const dateUser = event.target.value;
    this.currentDate = this.datePipe
      .transform(dateUser, 'dd-MM-YYYY')
      ?.toLowerCase();
    this.hashMd5(this.currentDate as string);
    this.storeService.setApiKey(this.api_key as string);

    this.router.navigate([`data`]);
  }
  ngOnInit(): void {
    const date = new Date();
    this.today = date.toISOString().split('T')[0];
  }
}
