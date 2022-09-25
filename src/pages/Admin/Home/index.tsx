import { Button } from "@chakra-ui/button";

import css from "./styles.module.css";
function AdminHome() {
  return (
    <>
      <h1 className={css.title}>Seja bem vindo (a), o que você deseja?</h1>
      <div className={css.actions}>
        <Button className={css.btn} variant="contained">
          Cadastrar novos produtos
        </Button>
        <Button className={css.btn} variant="contained">
        Requisições
      </Button>
        <Button className={css.btn} variant="contained">
          Estoque
        </Button>
      </div>
    </>
  );
}

export { AdminHome };
