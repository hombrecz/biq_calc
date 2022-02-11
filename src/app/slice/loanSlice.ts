import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

export interface LoanState {
    amount: number;
    term: number;
}

const initialState: LoanState = {
    amount: 400,
    term: 15
}

export const loanSlice = createSlice({
    name: 'loan',
    initialState,
    reducers: {
        setAmount: (state, action: PayloadAction<number>) => {
            state.amount = action.payload
        },
        setTerm: (state, action: PayloadAction<number>) => {
            state.term = action.payload
        }
    },
});

export const { setAmount, setTerm } = loanSlice.actions;

export const selectAmount = (state: RootState) => state.loan.amount;
export const selectTerm = (state: RootState) => state.loan.term;

export default loanSlice.reducer;