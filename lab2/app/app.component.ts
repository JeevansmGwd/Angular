import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildRecieverComponent } from './child-reciever/child-reciever.component';
import { ChildSenderComponent } from './child-sender/child-sender.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ChildRecieverComponent,ChildSenderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab2';
  obj: { name: string, phone: string } = { name: '', phone: '' };

  sendObject(){
    this.obj.name="Jeevan SM",
    this.obj.phone="7090943866"
  }

  fromChildObject:{ name: string, phone: string } = { name: '', phone: '' };
  recieveObj($event:any){
    this.fromChildObject=$event;
  }
}
