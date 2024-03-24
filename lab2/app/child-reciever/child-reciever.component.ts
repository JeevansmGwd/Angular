import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child-reciever',
  standalone: true,
  imports: [],
  templateUrl: './child-reciever.component.html',
  styleUrl: './child-reciever.component.css'
})
export class ChildRecieverComponent {
  @Input() objFromParent: { name: string, phone: string } = { name: '', phone: '' };
}
