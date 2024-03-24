import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumberListComponent } from './number-list/number-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NumberListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab7';
}