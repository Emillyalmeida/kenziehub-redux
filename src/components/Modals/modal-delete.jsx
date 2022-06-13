import {
  AlertDialogFooter,
  Button,
  AlertDialogBody,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialog,
  ChakraProvider,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { deleteTechsThunk } from "../../store/modules/techs/thunk";

const ModalDelete = ({ isDelete, onDelClose, detailTech, onCloseInfo }) => {
  const dispatch = useDispatch();

  const deleteTech = () => {
    dispatch(deleteTechsThunk(detailTech.id, onCloseInfo, onDelClose));
  };

  return (
    <ChakraProvider resetCSS={false}>
      <AlertDialog isOpen={isDelete} onClose={onDelClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete listTechs
            </AlertDialogHeader>

            <AlertDialogBody>
              Tem certeza que deseja excluir essa tecnologia?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onDelClose}>Cancel</Button>
              <Button colorScheme="red" onClick={() => deleteTech()} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </ChakraProvider>
  );
};

export default ModalDelete;
