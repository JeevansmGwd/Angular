import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FontSizeDirective } from './fontDirective/font-size-directive.directive';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FontSizeDirective,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab3';
  size: number = 10;

  sendFontsize(value: string) {
    this.size = parseInt(value);
  }
}
