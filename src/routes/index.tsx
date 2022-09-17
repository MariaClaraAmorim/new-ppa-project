import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../layout/MainTemplate";
import { MainTemplateLogin } from "../layout/MainTemplateLogin";
import { Cadastro } from "../pages/Cadastro";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Resultados } from "../pages/Resultados";

function RoutesApp() {
  return (
    /* Rotas que serão usadas */

    <Routes>
      <Route
        path="/login"
        element={
          <MainTemplateLogin>
            <Login />
          </MainTemplateLogin>
        }
      />

      <Route
        path="/cadastro"
        element={
          <MainTemplateLogin>
            <Cadastro />
          </MainTemplateLogin>
        }
      />

      <Route
        index
        element={
          <MainTemplate>
            <Home />
          </MainTemplate>
        }
      />

      <Route
        path="/resultados"
        element={
          <MainTemplate>
            <Resultados />
          </MainTemplate>
        }
      />
    </Routes>
  );
}

export { RoutesApp };
