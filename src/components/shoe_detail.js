import { Container } from "@material-ui/core";
import React, { useContext } from "react";
import { ShoeContext } from "../context/ShoeContext";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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

const Shoe_detail = () => {
  const { shoes } = useContext(ShoeContext);
  const { id } = useParams();
  console.log(id);
  const shoe = shoes[id - 1];
  const classes = useStyles();

  return (
    <div>
      <Container style={{ marginTop: "80px" }} maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <img
                  style={{ width: "100%" }}
                  alt={shoe.name}
                  src={shoe.imageURL}
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <div style={{ fontWeight: "bold", fontSize: "35px" }}>
                {shoe.name}
              </div>
              <br />
              <p style={{ fontSize: "20px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>

              <span style={{ fontWeight: "bold", fontSize: "35px" }}>
                ${shoe.price}
              </span>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Shoe_detail;
