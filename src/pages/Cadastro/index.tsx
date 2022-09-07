import { Button } from "@chakra-ui/react";

import css from "./styles.module.css";

function Cadastro() {
  return (
    <>
      <article className={css.containerLogin}>
        <article className={css.inputLogin}>
          <ul className={css.title}>
            <li>Login</li>
            <a href="/cadastro">
              <li>Cadastro</li>
            </a>
          </ul>

          <div className={css.box}>
            <input type="text" required />
            <span>Nome completo</span>
            <i></i>
          </div>

          <div className={css.box}>
            <input type="text" required />
            <span>Cpf</span>
            <i></i>
          </div>

          <div className={css.box}>
            <input type="text" required />
            <span>E-mail</span>
            <i></i>
          </div>

          <div className={css.box}>
            <input type="password" required />
            <span>Senha</span>
            <i></i>
          </div>
        </article>
        <article>
          <div className={css.box}>
            <input type="text" required />
            <span>Endereço</span>
            <i></i>
          </div>

          <div className={css.box}>
            <input type="text" required />
            <span>Telefone</span>
            <i></i>
          </div>

          <Button className={css.btn} colorScheme="blue">
            Confirmar
          </Button>
        </article>
      </article>
      <footer>
        <p>Sistema Cocoricó</p>
        <p>2022</p>
      </footer>
    </>
  );
}

export { Cadastro };
