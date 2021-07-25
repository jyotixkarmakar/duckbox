import { Container, Grid, Select, Typography } from "@material-ui/core";
import { Component } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./HeadersStyles";
import logo from "./../../assets/logo.png"
import { useState } from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = (props: any) => {
    const classes = useStyles();
    const [city, setCity] = useState("Raiganj");
    const changeCity = (event) => {
        setCity(event.target.value)
    }
    return (
        <div className={classes.root+" container"}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Typography>
                        <img src={logo}></img>
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography>
                        <Select
                            native
                            value={city}
                            onChange={changeCity}
                            inputProps={{
                                name: 'city',
                                id: 'city-id',
                            }}
                        >
                            <option value="Raiganj">Raiganj</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Balurghat">Balurghat</option>
                        </Select>
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography>
                                Duckbox for Partners</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>Business With Duckbox</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid container>
                        <Grid item xs={4}>
                            Search
                        </Grid>
                        <Grid item xs={4}>
                            <ShoppingCartIcon color="primary" ></ShoppingCartIcon>
                        </Grid>
                        <Grid item xs={4}>
                            Sign In
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>);
}

export default Header;