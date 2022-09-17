import { ReactElement } from "react";
import { Footer } from "../../components/common/Footer";
import { Header } from "../../components/common/Header";
import css from "./styles.module.css";

interface Props {
  children: ReactElement;
}

function MainTemplateLogin({ children }: Props) {
  return (
    <div className={css.container}>
      <div className={css.content}>{children}</div>
    </div>
  );
}

export { MainTemplateLogin };

{
  /* <div className={css.footer}>
        <p>Sistema Cocoricó</p>
        <p>2022</p>
      </div> */
}
