import { ReactElement } from "react";
import { Footer } from "../../components/common/Footer";
import { Header } from "../../components/common/Header";
import css from "./styles.module.css";

interface Props {
  children: ReactElement;
}

function MainTemplate({ children }: Props) {
  return (
    <div className={css.main}>
      <Header />
      <div className={css.container}>
        <div className={css.content}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export { MainTemplate };
