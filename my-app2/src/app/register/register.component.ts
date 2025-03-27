import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Observable, delay, map, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserRegistrationData } from '../model/user-registration-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule],
  
templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup

  constructor(private formBuilder:FormBuilder, 
    private authService:AuthService,
    private router:Router){
  }

  ngOnInit(): void {

    //fetch some data from the backend

    this.registerForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email], this.asyncUniqueEmailValidator ],
      password: new FormControl('', [Validators.required, Validators.minLength(5), this.noWhileSpaceValidator]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  handleSubmit() {
    console.log('register form is submitted')
    console.log(this.registerForm.value)

    const {email, password} = this.registerForm.value;

    const userRegistration: UserRegistrationData = {
      email, password
    }

    this.authService.register(userRegistration)
      .subscribe({
        next: (response)=> {
          //handle success response
          alert('Registration Successful!')
          //navigate to homepage
          this.router.navigate(['/']);
        },
        error: (error)=> {
          console.log('registration failed ', error)
        }
      })

  }

  public get firstNameControl() {
    return this.registerForm.get('firstName');
  }

  public get passwordControl() {
    return this.registerForm.get('password');
  }

  noWhileSpaceValidator(control: AbstractControl): ValidationErrors | null {

    const isWhiteSpace = (control.value || '' ).trim().length === 0;
    return !isWhiteSpace ? null : { 'whitespace' : true}
  }

  asyncUniqueEmailValidator(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{

    const emailsTaken = ['test@test.com','admin@test.com','info@test.com'];

    return of(emailsTaken.includes(control.value))
        .pipe(
          delay(5000),
          map(isTaken => (isTaken ? {notUniqueEmail : 'true'} : null ))
        )
    }
}
