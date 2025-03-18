import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LoginPagesComponent } from './login/login-pages/login-pages.component';
import { HistoryPagesComponent } from './history/history-pages/history-pages.component';
import { MainPagesComponent } from './main/main-pages/main-pages.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

    MainPagesComponent,
    LoginPagesComponent,
    HistoryPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
