import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../layout/MainTemplate";
import { MainTemplateLogin } from "../layout/MainTemplateLogin";
import { Login } from "../pages/Login";
import { CadProduto } from "../pages/Admin/CadProduto";
import { AdminHome } from "../pages/Admin/Home";
import { Home } from "../pages/Usuario/Home";
import { Resultados } from "../pages/Usuario/Resultados";
import { Carrinho } from "../pages/Usuario/Carrinho";
import { Cadastro } from "../pages/Cadastro";

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

      <Route
        path="/carrinho"
        element={
          <MainTemplate>
            <Carrinho />
          </MainTemplate>
        }
      />

      <Route
        path="/admin/home"
        element={
          <MainTemplate>
            <AdminHome />
          </MainTemplate>
        }
      />

      <Route
        path="/admin/cadastrar-produto"
        element={
          <MainTemplate>
            <CadProduto />
          </MainTemplate>
        }
      />
    </Routes>
  );
}

export { RoutesApp };
