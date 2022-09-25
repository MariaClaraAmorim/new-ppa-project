import { Button } from "@chakra-ui/react";
import css from "./styles.module.css";

function Carrinho() {
  return (
    <>
      <table className={css.table}>
        <caption>Meu carrinho</caption>
        {/*        <thead className={css.thead}>
          <tr className={css.tr}>
            <th scope="col">Produto</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Status</th>
            <th scope="col">Ação</th>
          </tr> 
        </thead>*/}
        <tbody className={css.tbody}>
          <tr className={css.tr}>
            <td data-label="Produto">Caneta Azul</td>
            <td data-label="Quantidade">10</td>
          </tr>
        </tbody>
      </table>
      <div className={css.action}>
        <Button className={css.btn}>Confirmar</Button>
      </div>
    </>
  );
}

export { Carrinho };
