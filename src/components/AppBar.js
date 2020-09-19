import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import nike from "../images/nike.png";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    maxWidth: 100,
  },
  typography: {
    flexGrow: 1,
    cursor: "pointer",
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
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
                  MEN
                </Typography>
                <Typography variant="h6" className={classes.typography}>
                  WOMEN
                </Typography>
                <Typography variant="h6" className={classes.typography}>
                  KIDS
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
