import { Button } from "@chakra-ui/react";

import css from "./styles.module.css";

function Cadastro() {
  return (
    <>
      <div className={css.tudo}>
        <div className={css.bloco1}>
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
          </form>
        </div>
        <div className={css.bloco2}>
          <form action="" className={css.form}>
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
          </form>
        </div>
      </div>
      {/*       <article>
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
          </form>
        </div>
        <div className={css.content2}>
          <form action="" className={css.form}>
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
          </form>

          <Button className={css.btn} colorScheme="blue">
            Confirmar
          </Button>
        </div>
      </article> */}
    </>
  );
}

export { Cadastro };
