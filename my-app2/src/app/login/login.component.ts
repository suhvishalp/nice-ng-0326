import { Component } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  onSubmit(loginForm:NgForm){
    console.log('Form is submitted')
    console.log(loginForm)
    //console.log(loginForm.value)
  }
}
