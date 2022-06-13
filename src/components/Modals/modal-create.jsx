import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Buttons from "../Buttons";
import Input from "../Input";
import Select from "../Select";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const AddTech = ({ isOpen, onClose, postTech }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Nome é Obrigatório"),
    status: yup.string().required("selecione nivel"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <ChakraProvider resetCSS={false}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="var(--gray-black)">
          <ModalHeader bgColor="var(--gray-medium)" as="h3">
            Cadastrar Tecnologia
          </ModalHeader>
          <ModalCloseButton
            bgColor="var(--gray-black)"
            color="var(--gray-ligth)"
            borderColor="var(--gray-medium)"
          />
          <ModalBody pb={6} component="form">
            <Input
              register={register}
              name="title"
              label="Nome"
              placeholder="Digite o nome da tecnologia"
              error={errors.title?.message}
            />

            <Select
              placeholder="Selecione Nivel"
              error={errors.status?.message}
              register={register}
              name="status"
              label="Selecione nivel"
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Buttons whiteTheme onClick={handleSubmit(postTech)}>
              Cadastrar tecnologia
            </Buttons>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default AddTech;
