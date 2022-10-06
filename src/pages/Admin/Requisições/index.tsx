import { FaPencilAlt } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";
import { Button, useDisclosure } from "@chakra-ui/react";
import css from "./styles.module.css";

function Requisições() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <section className={css.requisicoes}>
        <table className={css.table}>
          <caption>Requisições</caption>
          <thead className={css.thead}>
            <tr className={css.tr}>
              <th className={css.th}>Produto</th>
              <th className={css.th}>Quantidade</th>
              <th className={css.th}>Hora do req.</th>
              <th className={css.th}>Data do req.</th>
              <th className={css.th}>Status</th>
            </tr>
          </thead>

          <tbody className={css.tbody}>
            <tr className={css.tr}>
              <td data-label="Produto">Resma Papel A4</td>
              <td data-label="Quantidade">3</td>
              <td data-label="Hora"> 17:30</td>
              <td data-label="Data">06/10/2022</td>
              {/* <td data-label="Status" className={css.status}>
                <div className={css.radius} id={css.statusRed}></div>
              </td> */}
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export { Requisições };
