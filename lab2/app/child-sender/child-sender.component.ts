import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-child-sender',
  standalone: true,
  imports: [],
  templateUrl: './child-sender.component.html',
  styleUrl: './child-sender.component.css'
})
export class ChildSenderComponent {
  objFromChild:object={
    name : "Jeevan S M",
    phone : "7090943866"
  };
  @Output() objectEvent = new EventEmitter<object>();
  sendObject(){
    this.objectEvent.emit(this.objFromChild);
  }
}
