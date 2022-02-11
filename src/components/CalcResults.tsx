import { Grid, Button, Typography } from "@mui/material";
import React from "react";

const CalcResults = (props: { term: number, total: number, monthly: number, credit: number, repayable: number }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Typography variant="body1" >Total</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1" >{props.total}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1" >Term</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1" >{props.term}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1" >Credit</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1" >{props.credit}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1" >Repayable</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1" >{props.repayable}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1" >Monthly</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1" >{props.monthly}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1" >Some date</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1" >26/FEB/2022</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1" >Text text text</Typography>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained">Submit</Button>
            </Grid>
        </Grid>
    );
}

export default CalcResults;