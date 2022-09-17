import css from "./styles.module.css";

import { Button } from "@chakra-ui/react";
// import { Pagination } from "@mui/material";

import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Checkbox from "@mui/material/Checkbox";

function Resultados() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <table className={css.table}>
        <caption>Resultados</caption>
        <thead className={css.thead}>
          <tr className={css.tr}>
            <th scope="col">Produto</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Status</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody className={css.tbody}>
          <tr className={css.tr}>
            <td data-label="Produto">Caneta Azul</td>
            <td data-label="Quantidade">10</td>
            <td data-label="Status">Disponivel</td>
            <td data-label="Ação">
              <Button className={css.btn} onClick={onOpen}>
                Open Modal
              </Button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* <Pagination /> */}

      <div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className={css.dialog}>
            {/* <{ModalCloseButton} /> */}
            <ModalBody>
              <h3>Caneta Azul</h3>

              <p>
                Caneta Bic ( Unidade)
                <Checkbox {...label} defaultChecked />
              </p>

              <p>
                Caneta Bic (Caixa)
                <Checkbox {...label} defaultChecked />
              </p>
              <p>
                Caneta Faber (Caixa)
                <Checkbox {...label} defaultChecked />
              </p>

              <div className={css.acoes}>
              <Button
                className={css.btn}
                colorScheme="blue"
                mr={3}
                onClick={onClose}
              >
                Voltar
              </Button>
              <Button className={css.btn}>Requisitar</Button>
            </div>
            </ModalBody>
            
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
export { Resultados };
