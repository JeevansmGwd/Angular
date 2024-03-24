import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { Component, OnChanges } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-api',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserFormComponent {

  msg:string='';

  constructor(private http:HttpClient){}

  apiUrl='https://randomuser.me/api/';
  apiData:any=null;
  error:string='';
  
  fetchData(){
    this.http.get<any>(this.apiUrl).subscribe({
      next:(response)=>{
        this.apiData=response.results[0];
        console.log(this.apiData);
        this.error='No error';
      },
      error:(err)=>{
        console.log("Error Occured",err);
      }
    })
  }
  retrievedUserForm = new FormGroup({
    name:new FormControl('',Validators.required),
    photo: new FormControl(),
    gender:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    country: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required)
  })

  
  clearForm(){
    this.retrievedUserForm.setValue({
      name: '',
      city:null,
      gender: null,
      email: null,
      phone: null,
      country: null,
      photo: null
    })
    this.msg='';
  }

  fillForm(){
    this.retrievedUserForm.setValue({
      name: this.apiData.name.title + ". " + this.apiData.name.first + " " + this.apiData.name.last,
      gender: this.apiData.gender,
      email: this.apiData.email,
      phone: this.apiData.phone,
      country: this.apiData.location.country,
      photo: this.apiData.picture.large,
      city:this.apiData.location.city
    })
  }

  formSubmit(){
    this.msg="Form Submitted!!"
  }

  onSubmit(event:Event){
    event.preventDefault();
  }

}