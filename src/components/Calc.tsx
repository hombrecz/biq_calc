import { Container } from "@mui/material";
import React from "react";
import CalcForm from "./CalcForm";
import CalcResults from "./CalcResults";

const Calc = () => {
    return (
        <Container>
            <CalcForm/>
            <CalcResults total={1000} term={5} credit={100} repayable={1200} monthly={240} />
        </Container>
    );
}

export default Calc;