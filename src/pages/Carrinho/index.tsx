import { FaPencilAlt } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";
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
        </thead>*/
        }
          <thead className={css.thead}>
            <tr className={css.tr}>
              <th className={css.th}>Produto</th>
              <th className={css.th}>Quantidade</th>
              <th className={css.th}>Opções</th>
            </tr>
          </thead>

        <tbody className={css.tbody}>
          {/* Item TR */}
          <tr className={css.tr}>
              <td data-label="Produto">Caneta Azul</td>
              <td data-label="Quantidade">242</td>
            <div className={css.icons}>
              <td>
                <FaPencilAlt 
                className={css.iconEdit}
                style={{ fill: "gold" }}
                />
              </td>
              <td>
              <BsTrashFill 
                className={css.iconTrash}
                style={{ fill: "red" }}
                />
              </td>
            </div>
          </tr>
          {/* INSERÇÃO PRA TESTE */}
          <tr className={css.tr}>
              <td data-label="Produto">Resma Papel A4</td>
              <td data-label="Quantidade">3</td>
            <div className={css.icons}>
              <td>
                <FaPencilAlt 
                className={css.iconEdit}
                style={{ fill: "gold" }}
                />
              </td>
              <td>
              <BsTrashFill 
                className={css.iconTrash}
                style={{ fill: "red" }}
                />
              </td>
            </div>
          </tr>
          <tr className={css.tr}>
              <td data-label="Produto">Álcool 70</td>
              <td data-label="Quantidade">25</td>
            <div className={css.icons}>
              <td>
                <FaPencilAlt 
                className={css.iconEdit}
                style={{ fill: "gold" }}
                />
              </td>
              <td>
              <BsTrashFill 
                className={css.iconTrash}
                style={{ fill: "red" }}
                />
              </td>
            </div>
          </tr>
          {/* ------------- */}
        </tbody>
      </table>
      <div className={css.action}>
        <Button className={css.btn}>Confirmar</Button>
      </div>
    </>
  );
}

export { Carrinho };
