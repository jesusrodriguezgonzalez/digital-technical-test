import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [DataComponent],
  imports: [CommonModule, DataRoutingModule, NgxPaginationModule],
})
export class DataModule {}
