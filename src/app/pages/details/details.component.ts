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
  constructor(
    public storeService: StoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.storeService
      .getProfile(this.login as string)
      .subscribe((data) => (this.user = data));
  }
}
