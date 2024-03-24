import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CharPipePipe } from './Pipe/two-char-pipe.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CharPipePipe ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab4';
  str: string = '';
  length: number = 2;

  sendData(value: string) {
    this.str = value;
  }
}