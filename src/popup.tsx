import React from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import Container from "./components/Container";
import Platforms from "./components/Platforms";
import "./input.css";

const Popup = () => {
  return (
    <Container>
      <Header />
      <Platforms/>
    </Container>
  );
};

render(<Popup />, document.getElementById("react-target"));
