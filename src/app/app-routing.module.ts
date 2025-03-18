import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPagesComponent } from './main/main-pages/main-pages.component';
import { LoginPagesComponent } from './login/login-pages/login-pages.component';
import { HistoryPagesComponent } from './history/history-pages/history-pages.component';

const routes: Routes = [
  { path: '', component: MainPagesComponent },
  { path: 'login', component: LoginPagesComponent },
  { path: 'history', component: HistoryPagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
