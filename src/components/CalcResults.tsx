import {Grid, Button, Typography, CircularProgress} from "@mui/material";
import React from "react";
import {useAppSelector} from "../app/hooks";
import {selectLoadingLoanOffer, selectLoanOffer} from "../app/slice/loanSlice";

const CalcResults = () => {
    const loanOffer = useAppSelector(selectLoanOffer)
    const loadingLoanOffer = useAppSelector(selectLoadingLoanOffer)

    return (
        <Grid container spacing={2}>
            {loadingLoanOffer
                ? <CircularProgress/>
                : <>
                    <Grid item xs={6}>
                        <Typography variant="body1">Total</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">{loanOffer.totalPrincipal}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">Term</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">{loanOffer.term}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">Credit</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">{loanOffer.totalCostOfCredit}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">Repayable</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">{loanOffer.totalRepayableAmount}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">Monthly</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">{loanOffer.monthlyPayment}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">Some date</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body1">26/FEB/2022</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">Text text text</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained">Submit</Button>
                    </Grid>
                </>
            }
        </Grid>
    );
}

export default CalcResults;