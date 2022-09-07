import React from "react";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { Cadastro } from "../pages/Cadastro";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

const RoutesApp = () => {
  return (
    /* Rotas que serão usadas */
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/cadastro" element={<Cadastro />} />

          <Route path="/home" element={<Home />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
