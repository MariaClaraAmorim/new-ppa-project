import { Button, Input } from "@chakra-ui/react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import css from "./styles.module.css";

function Login() {
  return (
    <>
      <div className={css.content}>
        <form action="" className={css.form}>
          <ul className={css.title}>
            <a href="/login">
              <li>Login</li>
            </a>
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
              {/* <AiOutlineEyeInvisible /> */}
            </span>
            <i></i>
          </div>
          <div className={css.teste}>
            <a href="/">
              <Button className={css.btn}>Entrar</Button>
            </a>
            <p>Esqueci minha senha</p>
          </div>
        </form>

        <div className={css.bloco2}>
          <img className={css.imgLogin} src="public\vetorcanto.png" />
        </div>
      </div>
    </>
  );
}
export { Login };
