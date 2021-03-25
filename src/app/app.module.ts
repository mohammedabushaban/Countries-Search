import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // NgbAlertModule, NgbModule, NgbPaginationModule
  ],
  exports: [HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
