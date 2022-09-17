import { Button } from "@chakra-ui/button";
import { AiOutlineSearch } from "react-icons/ai";

import css from "./styles.module.css";

function Home() {
  return (
    <>
      <div className={css.containerInput}>
        <div className={css.searchbox}>
          <input
            type="text"
            className={css.searchinput}
            placeholder="Buscar produto desejado..."
          />

          <button className={css.searchbutton}>
            <AiOutlineSearch className={css.iconSearch} />
          </button>
        </div>
      </div>

      <Button className={css.btn} variant="contained">
        Requisições
      </Button>
    </>
  );
}
export { Home };
