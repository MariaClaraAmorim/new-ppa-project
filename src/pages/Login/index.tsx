import { Button, Input } from "@chakra-ui/react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import css from "./styles.module.css";

import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";

function Login() {
  const navigate = useNavigate();

  const send = async () => {
    const data = {
      username: "Maria",
      password: "maria123",
    };

    const baseUrl = import.meta.env.VITE_API_URL;

    const response = await fetch(`${baseUrl}/auth/sign-in`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) return alert("Oops!");

    const json = await response.json();

    alert(json.message ?? "Sucesso!");

    navigate("/");
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await send();
  };

  return (
    <>
      <div className={css.content}>
        <form action="/" onSubmit={onSubmit} className={css.form}>
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
            <Button type="submit" className={css.btn}>
              Entrar
            </Button>
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
