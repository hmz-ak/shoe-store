import Container from "./Container";
import React from "react";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";

const Home = () => {
  return (
    <div>
      <Container />
      <h1
        style={{ marginTop: "80px", marginBottom: "30px", marginLeft: "20px" }}
      >
        FOR MEN
      </h1>

      <Men />
      <h1
        style={{ marginTop: "80px", marginBottom: "30px", marginLeft: "20px" }}
      >
        FOR WOMEN
      </h1>

      <Women />
      <h1
        style={{ marginTop: "80px", marginBottom: "30px", marginLeft: "20px" }}
      >
        FOR KIDS
      </h1>

      <Kids />
    </div>
  );
};

export default Home;
