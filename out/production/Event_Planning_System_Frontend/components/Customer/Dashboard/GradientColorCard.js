import React, { useEffect, useState } from "react";
import {
    AppBar,
    Button,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Container,
    InputAdornment,
    TextField,
    Card,
    CardContent,
} from "@material-ui/core";
import useStyles from "./style";
import {
    Search,
    ArrowDropDown,
    Event,
} from "@mui/icons-material";
const GradientColorCard = ({ icon, name, count }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <div className={classes.iconContainer}>{icon}</div>
                <Typography variant="h6" className={classes.cardTitle}>
                    {name}
                </Typography>
                <Typography variant="h4" className={classes.cardCount}>
                    {count}
                </Typography>
            </CardContent>
        </Card>
    );
};
