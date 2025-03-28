import { Component } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  

  constructor(private auth:AuthService, private router:Router){}

  onSubmit(loginForm:NgForm){
    
    if (loginForm.valid) {
      const { email, password } = loginForm.value;
      this.auth.login(email, password).subscribe({
        next: (res) => {
          console.log('Login successful', res);
          // Navigate to home page after login
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Login failed', err);
          alert('Login failed. Please check your credentials.');
        }
      });
    
  }
}
}