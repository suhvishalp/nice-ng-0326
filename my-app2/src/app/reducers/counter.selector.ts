import { MemoizedSelector, Selector, createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from ".";


export const selectCounterState = createFeatureSelector<State>('counter')

export const selectCount = createSelector(
    selectCounterState, 
    (state:State)=> state.count
);