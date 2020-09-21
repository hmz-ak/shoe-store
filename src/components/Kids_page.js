import React, { useContext } from "react";
import { ShoeContext } from "../context/ShoeContext";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Kids_Page = () => {
  const { shoes } = useContext(ShoeContext);
  const classes = useStyles();
  return (
    <Container style={{ marginTop: "80px" }} maxWidth="lg">
      <div className={classes.root}>
        <Grid container spacing={3}>
          {shoes.map((shoe, ind) => {
            return shoe.gender == "KIDS" ? (
              <Grid item xs={12} sm={6} md={4} key={ind}>
                <Paper elevation={3} className={classes.paper}>
                  <Link to={`/kids/${shoe.id}`} className={classes.linkItem}>
                    <img
                      src={shoe.imageURL}
                      style={{ width: "100%", height: "350px" }}
                      alt={shoe.name}
                    />
                    <p className={classes.productName}>{shoe.name}</p>
                  </Link>
                </Paper>
              </Grid>
            ) : null;
          })}
        </Grid>
      </div>
    </Container>
  );
};

export default Kids_Page;
