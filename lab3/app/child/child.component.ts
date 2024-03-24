import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FontSizeDirective } from '../fontDirective/font-size-directive.directive';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FontSizeDirective],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() size: number = 10;
}