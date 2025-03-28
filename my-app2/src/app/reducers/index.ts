import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';

import * as CounterActions from './counter.actions'

export const myStoreFeatureKey = 'myStore';

export interface State {
    count:number,
   
}

export const InitialState: State = {count: 10};

export const counterReducer = createReducer(
  InitialState,
  on(CounterActions.increment, (state:State) => ({...state,  count: state.count+1})),
  on(CounterActions.decrement, (state:State) => ({...state,  count: state.count-1})),
  on(CounterActions.reset, (state:State) => ({...state,  count: 0})),
  on(CounterActions.add, (state:State, {value}) => ({...state,  count: state.count + value})),
)




