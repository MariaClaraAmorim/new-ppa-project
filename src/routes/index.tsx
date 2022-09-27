import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../layout/MainTemplate";
import { MainTemplateLogin } from "../layout/MainTemplateLogin";
import { CadProduto } from "../pages/Admin/CadProduto";
import { AdminHome } from "../pages/Admin/Home";
import { Cadastro } from "../pages/Cadastro";
import { Carrinho } from "../pages/Carrinho";
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
