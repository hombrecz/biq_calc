import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {getConstraints, getLoanOffer} from "../api";
import {Dispatch} from "redux";

export interface Interval {
    min: number;
    max: number;
    step: number;
    defaultValue: number;
}

export interface Constraints {
    amountInterval: Interval;
    termInterval: Interval;
}

export interface Offer {
    totalPrincipal: number;
    term: number;
    totalCostOfCredit: number;
    totalRepayableAmount: number;
    monthlyPayment: number;
}

export interface LoanState {
    amount: number;
    term: number;
    isLoadingConstraints: boolean;
    constraints: Constraints;
    loanOffer: Offer;
}

const initialAmountInterval = {min: 1, max: 10, step: 1, defaultValue: 10}
const initialTermInterval = {min: 1, max: 10, step: 1, defaultValue: 3}
const initialOffer = {
    totalPrincipal: 1000,
    term: 5,
    totalCostOfCredit: 100,
    totalRepayableAmount: 1200,
    monthlyPayment: 240
}

const initialState: LoanState = {
    amount: initialAmountInterval.defaultValue,
    term: initialTermInterval.defaultValue,
    isLoadingConstraints: true,
    constraints: {
        amountInterval: initialAmountInterval,
        termInterval: initialTermInterval
    },
    loanOffer: initialOffer,
}

export const fetchConstraints = (dispatch: Dispatch<any>) => {
    getConstraints()
        .then(({data}) => {
            dispatch(setConstraints(data));
            dispatch(setAmount(data.amountInterval.defaultValue));
            dispatch(setTerm(data.termInterval.defaultValue));
        });
}

export const fetchLoanOffer = (amount: number, term: number) => {
    return (dispatch: Dispatch<any>) => {
        getLoanOffer(amount, term)
            .then(({data}) => {
                dispatch(setLoanOffer(data));
            });
    }
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
        },
        setConstraints: (state, action: PayloadAction<Constraints>) => {
            state.constraints = action.payload
        },
        setLoanOffer: (state, action: PayloadAction<Offer>) => {
            state.loanOffer = action.payload
        }
    }
});

export const {setAmount, setTerm, setConstraints, setLoanOffer} = loanSlice.actions;

export const selectAmount = (state: RootState) => state.loan.amount;
export const selectTerm = (state: RootState) => state.loan.term;
export const selectConstraints = (state: RootState) => state.loan.constraints;
export const selectLoanOffer = (state: RootState) => state.loan.loanOffer;

export default loanSlice.reducer;