import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-number-list',
  standalone: true,
  imports: [],
  templateUrl: './number-list.component.html',
  styleUrl: './number-list.component.css'
})
export class NumberListComponent implements OnInit {
  numbers$: Observable<number[]> = of([]);

  constructor() { }

  ngOnInit(): void {
    this.numbers$ = of([1, 2, 3, 4, 5]);
  }

  subscribeToNumbers() {
    this.numbers$.subscribe(numbers => {
      console.log(numbers);
    });
  }
}