import { Box } from "@mui/material";
import React from "react";
import CalcInput from "./CalcInput";

import { useAppSelector, useAppDispatch } from '../app/hooks';
import {selectAmount, selectTerm, setAmount, setTerm} from "../app/slice/loanSlice";

const CalcForm = () => {
    const amount = useAppSelector(selectAmount);
    const term = useAppSelector(selectTerm);
    const dispatch = useAppDispatch();

    const amountChanged = (amount: number) => {
        dispatch(setAmount(amount));
    }

    const termChanged = (term: number) => {
        dispatch(setTerm(term));
    }


    return (
        <Box>
            <CalcInput name={"Amount"} min={10} max={2000} step={10} defaultValue={amount} onValueChange={amountChanged}/>
            <CalcInput name={"Term"} min={3} max={31} step={1} defaultValue={term} onValueChange={termChanged}/>
        </Box>
    );
}

export default CalcForm;