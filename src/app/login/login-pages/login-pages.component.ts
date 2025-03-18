import { Component } from '@angular/core';

@Component({
  selector: 'app-login-pages',
  standalone: false,
  templateUrl: './login-pages.component.html',
  styleUrl: './login-pages.component.scss'
})
export class LoginPagesComponent {
  username: string = '';
  password: string = '';

  login() {
    console.log(`Логин: ${this.username}, Пароль: ${this.password}`);
  }
}
