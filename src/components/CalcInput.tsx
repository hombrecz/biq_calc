import {FormControl, Grid, MenuItem, Select, SelectChangeEvent, Slider, Typography} from "@mui/material";
import React from "react";

type Props = {
    min: number;
    defaultValue: number;
    max: number;
    name: string;
    step: number;
    onValueChange: (value: number) => void;
}

const CalcInput = ({ min, defaultValue, max, name, step, onValueChange }: Props) => {

    const steps = (from: number, to: number, step: number) => [...Array(Math.floor((to - from) / step) + 1)].map((_, i) => from + i * step);

    const selectChangedHandler = (event: SelectChangeEvent<number>) => {
        onValueChange(event.target.value as number);
    }

    const sliderChangedHandler = (event: Event, newValue: number | number []) => {
        onValueChange(newValue as number);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Typography variant="body1" >{name}</Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={defaultValue}
                        label={name}
                        onChange={selectChangedHandler}
                    >
                        {steps(min, max, step).map((step) =>
                            <MenuItem value={step}>{step}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <Slider
                    aria-label={name}
                    value={defaultValue}
                    valueLabelDisplay="auto"
                    step={step}
                    marks
                    min={min}
                    max={max}
                    onChange={sliderChangedHandler}
                />
            </Grid>
        </Grid>
    );
}

export default CalcInput;