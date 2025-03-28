import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://reqres.in/api'

  constructor(private http:HttpClient) { }

  public getUsers(page: number = 1): Observable<any>{
    return this.http.get(`${this.baseUrl}/users?${page}`)
            .pipe(
              map((response)=> {
                  console.log('response ', response)
                  return response;
              })
            )    
  }

  public createUser(name: string, job: string){
    const token = localStorage.getItem('authToken');
    return this.http.post(`${this.baseUrl}/users`, {name, job})
  }

}
