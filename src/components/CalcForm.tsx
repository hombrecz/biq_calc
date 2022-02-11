import {Box} from "@mui/material";
import React, {useEffect} from "react";
import CalcInput from "./CalcInput";

import {useAppSelector, useAppDispatch} from '../app/hooks';
import {
    fetchConstraints, fetchLoanOffer,
    selectAmount,
    selectConstraints,
    selectTerm,
    setAmount,
    setTerm
} from "../app/slice/loanSlice";

const CalcForm = () => {
    const amount = useAppSelector(selectAmount);
    const term = useAppSelector(selectTerm);
    const constraints = useAppSelector(selectConstraints);
    const dispatch = useAppDispatch();

    const amountChanged = (amount: number) => {
        dispatch(setAmount(amount));
        dispatch(fetchLoanOffer(amount, term));
    }

    const termChanged = (term: number) => {
        dispatch(setTerm(term));
        dispatch(fetchLoanOffer(amount, term));
    }

    useEffect(() => {
        dispatch(fetchConstraints)
    }, [])

    return (
        <Box>
            <CalcInput name={"Amount"} min={constraints.amountInterval.min} max={constraints.amountInterval.max}
                       step={constraints.amountInterval.step} value={amount} onValueChange={amountChanged}/>
            <CalcInput name={"Term"} min={constraints.termInterval.min} max={constraints.termInterval.max}
                       step={constraints.termInterval.step} value={term} onValueChange={termChanged}/>
        </Box>
    );
}

export default CalcForm;