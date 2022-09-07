import { Button, Input } from "@chakra-ui/react";
import css from "./styles.module.css";

import { AiOutlineEyeInvisible } from "react-icons/ai";
function Login() {
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
            <span>CPF</span>
            <i></i>
          </div>
          <div className={css.box}>
            <input type="password" required />
            <span>
              Senha
              <AiOutlineEyeInvisible />
            </span>
            <i></i>
          </div>

          <a href="/home">
            <Button colorScheme="blue">Entrar</Button>
          </a>
          <p>Esqueci minha senha</p>
        </article>

        <article>
          <img className={css.imgLogin} src="public\vetorcanto.png" />
        </article>
      </article>
      <footer>
        <p>Sistema Cocoricó</p>
        <p>2022</p>
      </footer>
    </>
  );
}
export { Login };
