// dux pattern??
// createSlice = API func to define redux logic
// PayloadAction = TS type of given action object
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state) {
      // does not have to return anything, can easily show as mutation
      // it uses immer, immer wraps state updates and tracks all mutations 
      // before returning state making it immutable.
      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value+=action.payload
    }
  }
});

export const { incremented, amountAdded } = counterSlice.actions;

export default counterSlice.reducer;