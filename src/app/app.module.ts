import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Md5 } from 'ts-md5';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
