import { hot } from "react-hot-loader/root";
import Accueil from "./Accueil";
import css from "./main.css.js";
import React from "react";
import { createGlobalStyle } from "styled-components";

// is this a good idea ? Would it be quicker for the user to load as .css in index.html ?
const GlobalStyle = createGlobalStyle`${css}`;
const Container = () => (
  <div>
    <GlobalStyle />
    <Accueil />
  </div>
);
export default hot(Container);
