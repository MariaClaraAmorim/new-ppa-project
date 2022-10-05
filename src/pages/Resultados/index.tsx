import css from "./styles.module.css";

import { Pagination } from "@mui/material";

import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Checkbox from "@mui/material/Checkbox";
import { Quantity } from "../../components/ui/Quantity";
function Resultados() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <table className={css.table}>
        <caption>Tabela responsiva</caption>
        <thead className={css.thead}>
          <tr className={css.tr}>
            <th scope="col">Produto</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Status</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>

        <div className={css.content}>
          <tbody className={css.tbody}>
            <tr className={css.tr}>
              <td data-label="Produto">Bicicleta Caloi</td>
              <td data-label="Quantidade">10</td>
              <td data-label="Status" className={css.status}>
                <div className={css.radius} id={css.statusRed}></div>
              </td>
              <td data-label="Ação">
                <Button className={css.btn} onClick={onOpen}>
                  Detalhes
                </Button>
              </td>
            </tr>

            <tr className={css.tr}>
              <td data-label="Produto">Bicicleta Caloi</td>
              <td data-label="Quantidade">10</td>
              <td data-label="Status" className={css.status}>
                <div className={css.radius} id={css.statusRed}></div>
              </td>
              <td data-label="Ação">
                <Button className={css.btn} onClick={onOpen}>
                  Detalhes
                </Button>
              </td>
            </tr>

            <tr className={css.tr}>
              <td data-label="Produto">Bicicleta Caloi</td>
              <td data-label="Quantidade">10</td>
              <td data-label="Status" className={css.status}>
                <div className={css.radius} id={css.statusRed}></div>
              </td>
              <td data-label="Ação">
                <Button className={css.btn} onClick={onOpen}>
                  Detalhes
                </Button>
              </td>
            </tr>

            <tr className={css.tr}>
              <td data-label="Produto">Bicicleta Caloi</td>
              <td data-label="Quantidade">10</td>
              <td data-label="Status" className={css.status}>
                <div className={css.radius} id={css.statusRed}></div>
              </td>
              <td data-label="Ação">
                <Button className={css.btn} onClick={onOpen}>
                  Detalhes
                </Button>
              </td>
            </tr>

            <tr className={css.tr}>
              <td data-label="Produto">Bicicleta Caloi</td>
              <td data-label="Quantidade">10</td>
              <td data-label="Status" className={css.status}>
                <div className={css.radius} id={css.statusRed}></div>
              </td>
              <td data-label="Ação">
                <Button className={css.btn} onClick={onOpen}>
                  Detalhes
                </Button>
              </td>
            </tr>

            <tr className={css.tr}>
              <td data-label="Produto">Bicicleta Caloi</td>
              <td data-label="Quantidade">10</td>
              <td data-label="Status" className={css.status}>
                <div className={css.radius} id={css.statusRed}></div>
              </td>
              <td data-label="Ação">
                <Button className={css.btn} onClick={onOpen}>
                  Detalhes
                </Button>
              </td>
            </tr>
          </tbody>
        </div>
      </table>

      <div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className={css.dialog}>
            <ModalBody>
              <div>
                <p className={css.titleModal}>
                  Retornar aqui o nome do produto
                </p>
              </div>

              <div>
                <p className={css.products}>
                  Caneta Bic (Caixa)<Quantity />
                  <Checkbox {...label} defaultChecked />
                </p>
                <p className={css.products}>
                  Caneta Bic (unidade) <Quantity />
                  <Checkbox {...label} defaultChecked />
                </p>
              </div>

              {/* 

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
              </p> */}

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

      <div className={css.pagination}>
        <Pagination />
      </div>
    </>
  );
}
export { Resultados };
