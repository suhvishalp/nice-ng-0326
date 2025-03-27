import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegistrationData } from '../model/user-registration-data.model';
import { Observable, tap } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private baseUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  register(userData: UserRegistrationData): Observable<User> {
    return this.http.post(this.baseUrl + '/register', userData).pipe(
      tap((response: User) => {
        if (response && response.token) {
          console.log('response received, storing the token in localStorage');
          localStorage.setItem('authToken', response.token);
        }
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password }).pipe(
      tap((response: any) => {
        if (response && response.token) {
          localStorage.setItem('authToken', response.token);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
