import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
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
        <ModalContent bgColor="var(--gray-black)">
          <ModalHeader bgColor="var(--gray-medium)" as="h3">
            Tecnologia Detalhes
          </ModalHeader>
          <ModalCloseButton
            bgColor="var(--gray-black)"
            color="var(--gray-ligth)"
            borderColor="var(--gray-medium)"
          />
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
            <Button
              h="48px"
              ml="4"
              w="100px"
              mt="1rem"
              color="var(--pink)"
              bgColor="var(--gray-white)"
              border="none"
              onClick={onDelOpen}
            >
              Excluir
            </Button>
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
