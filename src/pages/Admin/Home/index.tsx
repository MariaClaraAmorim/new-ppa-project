import { Button } from "@chakra-ui/button";

import css from "./styles.module.css";
function AdminHome() {
  return (
    <>
      <h1 className={css.title}>Seja bem vindo (a), o que você deseja?</h1>
      <div className={css.actions}>
        <a href="/admin/cadastrar-produto">
          <Button className={css.btn} variant="contained">
            Cadastrar novos produtos
          </Button>
        </a>
        <a href="http://">
          <Button className={css.btn} variant="contained">
            Requisições
          </Button>
        </a>

        <a href="/admin/estoque">
          <Button className={css.btn} variant="contained">
            Estoque
          </Button>
        </a>
      </div>
    </>
  );
}

export { AdminHome };
