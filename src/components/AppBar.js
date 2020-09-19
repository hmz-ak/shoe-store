import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import nike from "../images/nike.png";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    maxWidth: 90,
  },
  typography: {
    flexGrow: 1,
    cursor: "pointer",
  },
  links: {
    textDecoration: "none",
    color: "white",
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar style={{ background: "#000000" }} position="static">
          <Toolbar>
            <Grid justify={"space-between"} container>
              <Grid xs={1} item>
                <img className={classes.logo} src={nike} />
              </Grid>
              <Grid xs={4} item>
                <Grid container justify={"center"}>
                  <Typography variant="h6" className={classes.typography}>
                    <Link className={classes.links} to="men">
                      MEN
                    </Link>
                  </Typography>
                  <Typography variant="h6" className={classes.typography}>
                    <Link className={classes.links} to="women">
                      WOMEN
                    </Link>
                  </Typography>
                  <Typography variant="h6" className={classes.typography}>
                    <Link className={classes.links} to="kids">
                      KIDS
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
      <Routes>
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="kids" element={<Kids />} />
      </Routes>
    </Router>
  );
}
