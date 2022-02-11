import { Container } from "@mui/material";
import React from "react";
import CalcForm from "./CalcForm";
import CalcResults from "./CalcResults";

const Calc = () => {
    return (
        <Container>
            <CalcForm/>
            <CalcResults/>
        </Container>
    );
}

export default Calc;