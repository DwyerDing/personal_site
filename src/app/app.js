import './styles/'

import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Main } from "./pages/main/main";

render(
  (<BrowserRouter>
     <Main />
   </BrowserRouter>),
  document.getElementById("app")
);