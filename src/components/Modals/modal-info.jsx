import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Buttons from "../Buttons";
import Input from "../Input";
import Select from "../Select";

import { useForm } from "react-hook-form";
import ModalDelete from "./modal-delete";

const ModalInfo = ({ detailTech, isInfo, onCloseInfo, pacthTech }) => {
  const { register: regispatch, handleSubmit: handlePatch } = useForm();

  const {
    isOpen: isDelete,
    onOpen: onDelOpen,
    onClose: onDelClose,
  } = useDisclosure();

  return (
    <ChakraProvider resetCSS={false}>
      <Modal isOpen={isInfo} onClose={onCloseInfo}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tecnologia Detalhes</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} component="form">
            <Input
              register={regispatch}
              name="title"
              label="Nome do projeto"
              placeholder={detailTech.title}
              // error={errors.name?.message}
              value={detailTech.title}
              disabled
            />

            <Select
              placeholder={detailTech.status}
              // error={errors.status?.message}
              register={regispatch}
              name="status"
              label="Selecione nivel"
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Buttons whiteTheme onClick={handlePatch(pacthTech)}>
              Salvar alterações
            </Buttons>
            <button className="excluir" onClick={onDelOpen}>
              Excluir
            </button>
            <ModalDelete
              onDelClose={onDelClose}
              isDelete={isDelete}
              detailTech={detailTech}
              onCloseInfo={onCloseInfo}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default ModalInfo;
