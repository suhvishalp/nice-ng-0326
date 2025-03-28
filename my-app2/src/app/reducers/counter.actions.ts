import { createAction, props } from "@ngrx/store";


export const increment = createAction('[Counter] INCREMENT')
export const decrement = createAction('[Counter] DECREMENT')
export const reset = createAction('[Counter] RESET')
export const add = createAction('[Counter] ADD', props<{value:number}>())
