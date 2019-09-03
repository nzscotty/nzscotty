import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceDetectorModule, DeviceDetectorService } from 'ngx-device-detector';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeRates } from './exchangerates.component';
import { SidenavModule } from './sidenav/sidenav.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRates,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    // DeviceDetectorModule.forRoot(),
    NgbModule,
    GraphQLModule,
    HttpClientModule,
    SidenavModule
  ],
  exports: [
    CommonModule, MaterialModule, SidenavModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
