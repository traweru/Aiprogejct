import { Component } from '@angular/core';

@Component({
  selector: 'app-history-pages',
  standalone: false,
  templateUrl: './history-pages.component.html',
  styleUrl: './history-pages.component.scss'
})
export class HistoryPagesComponent {
  fullName: string = 'Иванов Иван Иванович';
  photoUrl: string = 'assets/images/photo.jpg';
  history: string[] = [
    'Первое сохранённое сообщение',
    'Второе сохранённое сообщение',
    'Третье сохранённое сообщение'
  ];
}
