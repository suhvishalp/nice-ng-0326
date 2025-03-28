import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AsyncPipe, CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ReversePipe } from "../pipes/reverse.pipe";
import { HighLightDirective } from '../directives/high-light.directive';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount } from '../reducers/counter.selector';
import * as CounterActions from '../reducers/counter.actions'
@Component({
  selector: 'app-home',
  imports: [DatePipe, HighLightDirective, AsyncPipe, CurrencyPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe, JsonPipe, ReversePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  currentDate: Date = new Date();
  price: number = 1234.56;
  text: string = 'Angular Pipes';
  objectData = { name: 'John Doe', age: 30, city: 'New York' };

  count!:Observable<number>;

  constructor(public userService: UserService, private store: Store){
    this.count = this.store.select(selectCount)
  }
  
  ngOnInit(): void {
    
    // this.userService.getUsers(2)
    //     .subscribe({
    //       next: (response)=> {
    //         console.log('Users Data ', response)
    //       },
    //       error: (error) => {
    //         console.log('something went wrong')
    //       }
    //     })
    
  }

  handleIncrement(){
    this.store.dispatch(CounterActions.increment())
  }

  handleDecrement(){
    this.store.dispatch(CounterActions.decrement())
  }

  
}
