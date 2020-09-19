import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Carousel from "./Carousel";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        style={{ background: "#F6F6F6", marginTop: "10px" }}
        maxWidth="lg"
      >
        <Carousel />
      </Container>
    </React.Fragment>
  );
}
