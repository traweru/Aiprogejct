import { Component } from '@angular/core';

@Component({
  selector: 'app-main-pages',
  standalone: false,
  templateUrl: './main-pages.component.html',
  styleUrl: './main-pages.component.scss'
})
export class MainPagesComponent {
  messages: { role: string; content: string; image?: string }[] = [
    { role: 'user', content: 'Привет!' }
  ];
  userInput: string = '';
  uploadedImage: string | null = null;

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ role: 'user', content: this.userInput });
      this.userInput = '';
    }
    if (this.uploadedImage) {
      this.messages.push({ role: 'user', content: 'Отправлено изображение:', image: this.uploadedImage });
      this.uploadedImage = null;
    }
  }

  uploadFile(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.uploadedImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
