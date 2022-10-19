import React, { useRef } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Text,
    useDisclosure,
    IconButton,
  } from '@chakra-ui/react';
import {AiFillDelete} from 'react-icons/ai';

const DeleteTodo = ({todo, deleteTodo}) => {
    
  const { isOpen, onOpen, onClose } = useDisclosure();

  const focusRef = useRef();

  const handleDelete = () => {
    
    deleteTodo(todo.id);

    onClose();
  }

    return(
        <>
        <IconButton role="delete-todo" icon={<AiFillDelete />} isRound='true' onClick={onOpen}/>
        <Modal 
          isCentered 
          isOpen={isOpen} 
          onClose={onClose}
          initialFocusRef={focusRef}>
          <ModalOverlay />
          <ModalContent w='90%'>
            <ModalHeader>Delete the todo task?</ModalHeader>
            <ModalBody>
              <Text>{todo.description}</Text>
            </ModalBody>
            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                No
              </Button>
              <Button
                colorScheme='red'
                onClick={() => handleDelete()}
              >
                Yes
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default DeleteTodo;