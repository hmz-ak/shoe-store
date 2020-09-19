import React, { useContext } from "react";
import Carousel from "react-material-ui-carousel";
import { Grid } from "@material-ui/core";
import { ShoeContext } from "../context/ShoeContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mystyle: {
    marginTop: "10px",
    marginBottom: "10px",
    height: "450px",
  },
}));

export default function Example(props) {
  const { shoes } = useContext(ShoeContext);
  const data1 = shoes[0];
  const data2 = shoes[1];
  const data3 = shoes[2];
  const data4 = shoes[3];
  const data5 = shoes[4];
  const data6 = shoes[5];
  const data7 = shoes[6];
  var items = [
    {
      name: data1.name,
      img: data1.imageURL,
    },
    {
      name: data2.name,
      img: data2.imageURL,
    },
    {
      name: data3.name,
      img: data3.imageURL,
    },
    {
      name: data4.name,
      img: data4.imageURL,
    },
    {
      name: data5.name,
      img: data5.imageURL,
    },
    {
      name: data6.name,
      img: data6.imageURL,
    },
    {
      name: data7.name,
      img: data7.imageURL,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <div className={classes.mystyle}>
        <img style={{ height: "100%" }} src={props.item.img} />
      </div>
    </Grid>
  );
}
