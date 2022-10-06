import { FaPencilAlt } from "react-icons/fa";
import { BsTrashFill } from "react-icons/bs";
import { Button } from "@chakra-ui/react";
import css from "./styles.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

function Carrinho() {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
                <FaPencilAlt onClick={onOpen} 
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
                <Button onClick={onOpen}><FaPencilAlt 
                className={css.iconEdit}
                style={{ fill: "gold" }}
                />
                </Button>
              </td>
              <td>
              <BsTrashFill 
                className={css.iconTrash}
                style={{ fill: "red" }}
                />
              </td>
            </div>
          </tr>
        </tbody>
      </table>
      <div className={css.action}>
        <Button className={css.btn}>Confirmar</Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent className={css.dialog}>
          <ModalHeader>Edição</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <p>Teste</p>
          </ModalBody>
          
          <ModalFooter>
            <Button onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
{/* 
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay/>
        <ModalContent className={css.dialog}>
          <ModalHeader>Exlcuir</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            <p>Teste</p>
          </ModalBody>
          
          <ModalFooter>
            <Button onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'></Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  );
}

export { Carrinho };
