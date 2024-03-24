# Angular
Contains all the 10 angular programs 

ANGULAR-17-CODES
Angular 17 codes.

LAB-1
To create a simple Angular application with 4 components arranged in 2 rows and 2 columns, each labeled as Component1, Component2, Component3, and Component4, you can follow these steps:

**Create Angular Application**:
Use Angular CLI to create a new Angular application by running `ng new my-app-name`.
**Generate Components**:
Generate 4 components using Angular CLI commands:
     - `ng generate component component1`

     - `ng generate component component2`

     - `ng generate component component3`

     - `ng generate component component4`

**Arrange Components**:
To arrange the components in 2 rows and 2 columns, you can use Angular's Flex Layout.
In the main app component HTML file (`app.component.html`), you can structure the layout using Flex Layout directives like `fxLayout`, `fxLayoutAlign`, and `fxFlex`.
Here is an example of how you can arrange the components in a 2x2 grid:
```html

<div style="display: flex; flex-direction: row;">

  

  <div style="flex: 1;">

    <app-component1></app-component1>

  </div>

  <div style="flex: 1;">

    <app-component2></app-component2>

  </div>

</div>

<div style="display: flex; flex-direction: row;">

  

  <div style="flex: 1;">

    <app-component3></app-component3>

  </div>

  

  <div style="flex: 1;">

    <app-component4></app-component4>

  </div>

</div>

```

**Add Titles to Components**:
In each component's HTML file (e.g., `component1.component.html`), add a title to the component using HTML tags like `<h1>` or `<h2>`.
For example, in `component1.component.html`:
```html

<h2>Component 1</h2>

<!-- Add your component content here -->

```

**Run the Application**:
Start the Angular development server by running `ng serve --open` to see your application in the browser.
By following these steps, you can create a simple Angular application with 4 components arranged in 2 rows and 2 columns, each labeled as Component1, Component2, Component3, and Component4.

LAB-2
------------------------------------------------------------------------------------------------------------------

pass data from parent to child:

```parent-compenent.component.ts```

import { Component } from '@angular/core';

import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({

  selector: 'app-parent-component',

  standalone: true,

  imports: [ChildComponentComponent],

  templateUrl: './parent-component.component.html',

  styleUrl: './parent-component.component.css'

})

export class ParentComponentComponent {

  parentSent: string = 'Hai, From parent component.';

}

```parent-component.component.html```

<app-child-component [messageFromParent]="parentSent"></app-child-component>

```child-component.component.ts```

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ParentComponentComponent } from '../parent-component/parent-component.component';

@Component({

  selector: 'app-child-component',

  standalone: true,

  imports: [ParentComponentComponent],

  templateUrl: './child-component.component.html',

  styleUrl: './child-component.component.css'

})

export class ChildComponentComponent {

  @Input() messageFromParent!: string;

}

```child-component.component.html```

<p> child says <b>Received value From Parent:</b> {{ messageFromParent }}</p>

------------------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------------

pass data from child to parent:

```child-component.component.ts```

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ParentComponentComponent } from '../parent-component/parent-component.component';

@Component({

  selector: 'app-child-component',

  standalone: true,

  imports: [ParentComponentComponent],

  templateUrl: './child-component.component.html',

  styleUrl: './child-component.component.css'

})

export class ChildComponentComponent {

  @Output() onValueChange = new EventEmitter<any>();

  sendGreetings(waveHai: string) {

    this.onValueChange.emit(waveHai);

  }

}

```child-component.component.html```

<button (click)="sendGreetings('hello, parent')">  Send to Parent </button>

```parent-component.component.ts```

import { Component } from '@angular/core';

import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({

  selector: 'app-parent-component',

  standalone: true,

  imports: [ChildComponentComponent],

  templateUrl: './parent-component.component.html',

  styleUrl: './parent-component.component.css'

})

export class ParentComponentComponent {

  childSent!: string;

  recieveChildMessage(newValue: string) {

    this.childSent = newValue;

  }

}

```parent-component.component.html```

<app-child-component (onValueChange)="recieveChildMessage($event)"></app-child-component>

<p> Parent says <b> child has sent: </b> {{ childSent }} </p> 

------------------------------------------------------------------------------------------------------------------

LAB-3
To create a text input in the parent component, pass a number to the child component, and create a custom directive to change the font size based on the number passed from the parent component, you can follow these steps:

-------------easy-way---------------

```app.component.ts```

import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { ChildComponent } from './child/child.component';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

@Component({

  selector: 'app-root',

  standalone: true,

  imports: [RouterOutlet, ChildComponent, CommonModule, FormsModule],

  templateUrl: './app.component.html',

  styleUrl: './app.component.css'

})

export class AppComponent {

  title = 'customdirective';

  fontSizeParent: number = 15;

}

```app.component.html```

<input type="number" [(ngModel)]="fontSizeParent" />

<app-child [fontSizeRecieved]="fontSizeParent"></app-child>

```child.component.ts```

import { Component, Input, input } from '@angular/core';

import { FontsizeDirective } from '../fontsize.directive';

@Component({

  selector: 'app-child',

  standalone: true,

  imports: [FontsizeDirective],

  templateUrl: './child.component.html',

  styleUrl: './child.component.css'

})

```child.component.html```

<p>The current font size: {{ fontSizeRecieved }} </p>

<h2 changeFontSize [FontSizeInputDR]="fontSizeRecieved"> This is a sentence whose size changes!! </h2>

```fontSize.directive.ts```

import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({

  selector: '[changeFontSize]',

  standalone: true

})

export class FontsizeDirective {

  constructor(private el:ElementRef) { }

  @Input('FontSizeInputDR') set fontSize(size: number) {

    this.el.nativeElement.style.fontSize = `${size}px`;

  }

}

LAB-4
To create a custom pipe in Angular to display the first two characters of a string, you can follow these steps:

**Generate a new pipe using Angular CLI**: `ng generate pipe first-two-characters-pipe`.
**Define the custom pipe in the `first-two-characters-pipe.ts` file**:
```typescript

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({

  name: 'firstTwoCharacters'

})

export class FirstTwoCharactersPipe implements PipeTransform {

  transform(value: string): string {

    return value.substring(0, 2);

  }

}

```

**Use the custom pipe in the component's HTML file**:
```html

<p>{{ 'Hello World' | firstTwoCharacters }}</p>

```

**Run the Application**:
Start the Angular development server by running `ng serve --open` to see your application in the browser.
By following these steps, you can create a custom pipe in Angular to display the first two characters of a string. The pipe will be applied to the string using the `|` pipe operator in the component's HTML file.

LAB-5
To create a simple Angular form with 4 text fields and perform a mandatory check using ReactForm validation, you can follow these steps:

**Generate a new component using Angular CLI**: `ng generate component form-component`.
**In the `form-component.component.ts` file, import the necessary modules and define the form model and validation rules**:
```typescript

import { CommonModule } from '@angular/common';

import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({

  selector: 'app-form',

  standalone: true,

  imports: [CommonModule,FormsModule,ReactiveFormsModule],

  templateUrl: './form.component.html',

  styleUrl: './form.component.css'

})

export class FormComponent implements OnInit{

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  

  ngOnInit() {

    this.form = this.fb.group({

      name: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      age: ['', [Validators.required, Validators.min(18)]],

      address: ['', Validators.required]

    });

  }

  logDetails() {

    console.log(this.form);

  }

  onSubmit() {

    if (this.form.valid) {

      console.log(this.form.value);

    }

  }

}

```

```form.component.html```

<form [formGroup]="form" (ngSubmit)="onSubmit()">

    <div>

      <input type="text" formControlName="name" placeholder="Name"/>

      <div  *ngIf="form.get('name')?.hasError('required') && form.get('name')?.touched">

        <div class="error-message" >Name is required</div>

      </div>

    </div>

    <div>

      <input type="email" formControlName="email" placeholder="email"/>

      <div *ngIf="form.get('email')?.errors && form.get('email')?.touched">

        <div class="error-message" *ngIf="form.get('email')?.hasError('required')">email is required</div>

        <div class="error-message" *ngIf="form.get('email')?.hasError('email')">Invalid email</div>

      </div>

    </div>

    <div>

      <input type="number" formControlName="age" placeholder="age"/>

      <div *ngIf="form.get('age')?.errors && form.get('age')?.touched">

        <div class="error-message" *ngIf="form.get('age')?.hasError('required')">Age is required</div>

        <div class="error-message" *ngIf="form.get('age')?.hasError('min')">Age must be greater than or equal to 18</div>

      </div>

    </div>

    <div>

      <input type="text" formControlName="address" placeholder="address"/>

      <div *ngIf="form.get('address')?.errors && form.get('address')?.touched">

        <div class="error-message" *ngIf="form.get('address')?.hasError('required')">Address is required</div>

      </div>

    </div>

    <button type="submit" [disabled]="form.invalid"> submit </button>

    <button (click)="logDetails()">log</button>

</form>

**Run the Application**:
Start the Angular development server by running `ng serve --open` to see your application in the browser.
By following these steps, you can create a simple Angular form with 4 text fields and perform a mandatory check using ReactForm validation. The form will be validated using the `Validators` module from Angular, and any validation errors will be displayed using Angular's reactive form validation API.

LAB-6
To create an Angular application with 3 pages (Home, About, and Contact) and demonstrate routing from one page to another on the click of a button in each page using Angular 17, you can follow these steps:

**Generate Components**:
Generate components for Home, About, and Contact pages using Angular CLI:
     - `ng generate component home`

     - `ng generate component about`

     - `ng generate component contact`

**Set up Routing**:
Define the routes for the Home, About, and Contact pages in the `app.routes.ts` file:
```typescript

import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';

import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [

    { path: 'home', component: HomeComponent },

    { path: 'about', component: AboutComponent},

    { path: 'contact', component: ContactComponent},

    { path: '', redirectTo: '/home', pathMatch: 'full' },

];

```

**Update App Component**:
Update the `app.component.html` file to include buttons that navigate to different pages:
```html

<router-outlet></router-outlet>

```

**Add Navigation Buttons**:
In each component's HTML file (e.g., `home.component.html`, `about.component.html`, `contact.component.html`), add buttons to navigate to other pages:
```html 

<h1>HOME PAGE</h1>

<button (click)="goToAbout()">Go to About</button>

<button (click)="goToContact()">Go to Contact</button>

```

```ts

import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({

  selector: 'app-home',

  standalone: true,

  imports: [],

  templateUrl: './home.component.html',

  styleUrl: './home.component.css'

})

export class HomeComponent {

  constructor(private router: Router) {}

  goToAbout() {

    this.router.navigateByUrl('/about');

  }

  goToContact() {

    this.router.navigateByUrl('/contact');

  }

}

```

**Run the Application**:
Start the Angular development server by running `ng serve --open` to see your application in the browser.
By following these steps, you can create an Angular application with 3 pages (Home, About, and Contact) and demonstrate routing from one page to another on the click of a button in each page using Angular 17. The navigation between pages will be handled by Angular's built-in routing functionality.

LAB-7
To create an application demonstrating the working of observables and subscribers using the RxJS library with a simple array in Angular, you can follow these steps:

**Install RxJS**:
Ensure that RxJS is already included in your Angular project. If not, you can install it using npm:
     ```bash

     npm install rxjs

     ```

**Create Service**:
Generate a service using Angular CLI to handle the observable logic:
     ```bash

     ng generate service data

     ```

**Implement Observable Logic**:
In the service file (`data.service.ts`), create an observable that emits values from a simple array:
  

```typescript

import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({

  providedIn: 'root'

})

export class DataService {

  private data: string[] = ['Apple', 'Banana', 'Cherry'];

  getData(): Observable<string[]> {

    return of(this.data);

  }

}

```

**Subscribe to the Observable**:
In a component where you want to subscribe to the observable (e.g., `app.component.ts`), inject the service and subscribe to the observable:
```typescript

import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service';

@Component({

  selector: 'app-root',

  template: `

    <h2>Observable Data:</h2>

    <ul>

      <li *ngFor="let item of items">{{ item }}</li>

    </ul>

  `

})

export class AppComponent implements OnInit {

  items: string[];

  constructor(private dataService: DataService) {}

  ngOnInit() {

    this.dataService.getData().subscribe(data => {

      this.items = data;

    });

  }

}

```

**Display Data in Template**:
In the component's HTML file (e.g., `app.component.html`), display the data fetched from the observable:
```html

<h2>Observable Data:</h2>

<ul>

  <li *ngFor="let item of items">{{ item }}</li>

</ul>

```

**Run the Application**:
Start the Angular development server by running `ng serve --open` to see your application in the browser.
By following these steps, you can create an Angular application that demonstrates the working of observables and subscribers using the RxJS library with a simple array. The observable will emit values from the array, and the subscriber will receive and display these values in the application.

LAB-8
To create an Angular application with a button that fetches data from an external service (e.g., Random User Generator API) and displays the details upon clicking the button, you can follow these steps:

```user-details.component.ts```

import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';

@Component({

  selector: 'app-user-details',

  standalone: true,

  imports: [CommonModule, HttpClientModule],

  templateUrl: './user-details.component.html',

  styleUrl: './user-details.component.css'

})

export class UserDetailsComponent {

  userData: any;

  constructor(private http:HttpClient) {}

  private apiUrl = 'https://randomuser.me/api/';

  fetchUserData() {

    console.log("fetchUserData from UserDetailsComponent called !!");

    this.http.get(this.apiUrl).subscribe((data: any) => {

      this.userData = data.results[0];

      console.log(this.userData)

    });

  }

}

```user-details.component.html```

<button (click)="fetchUserData()">Fetch User Data</button>

<div *ngIf="userData">

      <img [src]="userData.picture.large" alt="User Image">

      <p>Name: {{ userData.name.first }} {{ userData.name.last }}</p>

      <p>Email: {{ userData.email }}</p>

</div>

LAB-9
To build a Node.js server with Express to provide API endpoints for GET requests and invoke this service from an Angular component, you can follow these steps:

     ```bash

     npm init -y

     npm install express body-parser

     ```

```server.js```

const express = require('express');

const cors = require('cors'); // Import the cors package

const app = express();

const PORT = 3000;

// Use the cors middleware

app.use(cors());

app.get('/api/data', (req, res) => {

    const data = { message: 'Hello, from node server..' };

    res.json(data);

});

app.listen(PORT, () => {

    console.log(`server is running on http://localhost:${PORT}`);

});

`node server.js`

```app-component.ts```import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

@Component({

  selector: 'app-root',

  standalone: true,

  imports: [RouterOutlet, CommonModule, HttpClientModule],

  templateUrl: './app.component.html',

  styleUrl: './app.component.css'

})

export class AppComponent {

  private apiUrl = 'http://localhost:3000/api/data/';

  title = 'nodeserver';

  data: any;

  constructor(private http: HttpClient) {}

  fetchData() {

    this.http.get(this.apiUrl).subscribe((response:any) => {

      this.data = response;

      console.log(response);

    })

  }

}

```app-component```

<button (click)="fetchData()">Fetch Data</button>

<div *ngIf="data">

  <p>{{ data.message }}</p>

</div>

LAB-10
To build a Node.js server with Express to provide API PUT endpoints for adding new objects to an array and invoke this service from an Angular component, you can follow these steps:

**Create a Node.js Server with Express**:
Create a new Node.js project and install Express:
     ```bash

     npm init -y

     npm install express body-parser

     ```

**Set up Express Server**:
Create a `server.js` file and set up an Express server with a PUT endpoint to push new objects to an array:
```javascript

const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use(cors());

let data = [];

app.put('/api/data', (req, res) => {

    const newData = req.body;

    data.push(newData);

    res.json({ message: 'Data added successfully' });

  });

app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`);

});

```

**Start the Node.js Server**:
Run the Node.js server by executing `node server.js`.
```app.component.html```

<button (click)="addObjectToServer()">Add New Data</button>

```app.component.ts```

import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';

@Component({

  selector: 'app-root',

  standalone: true,

  imports: [RouterOutlet, HttpClientModule],

  templateUrl: './app.component.html',

  styleUrl: './app.component.css'

})

export class AppComponent {

  title = 'putApi';

  constructor(private http: HttpClient) {}

  addObjectToServer() {

    const newObject = { name: 'New Object' }; // Example object

    this.http.put('http://localhost:3000/api/data', newObject).subscribe(response => {

        console.log('Object added successfully:', response);

    });

  }

}




