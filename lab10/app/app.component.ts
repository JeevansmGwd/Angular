import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab10';
  constructor(private http: HttpClient) { }

  addObject() {
    const newObject = { id: 1, name: 'New Object' }; // Example object
    this.http.put<any>('http://localhost:3000/api/objects', newObject)
      .subscribe(response => {
        console.log('Object added successfully:', response);
      });
  }
}