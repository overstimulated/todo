import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { 
  Button, 
  HStack, 
  Input, 
  useToast 
} from '@chakra-ui/react';


const AddTodo = ({addTodo}) => {

    const [description, setDescription] = useState("");
    const [statusInput, setStatusInput] = useState(true);

    const toast = useToast();

    const handleSubmit = () => {

        const text = description.trim();

        if(!text) {
            toast({
                title: "Enter a description",
                position: "top",
                status: "warning",
                isClosable: true     
              });

            setStatusInput(false);
            return setDescription("");
        }

        const todo = {
            id: uuidv4(),
            description: text,
            isCompleted: false
        }

        addTodo(todo);

        setDescription("");
    };

    if(description && !statusInput) {
        setStatusInput(true);
    }

    return(
      <HStack mt='5' mb='5'>
        <Input
          borderColor={!statusInput ? "red" : "transparent"}
          variant='filled'
          placeholder='Add your todo'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          colorScheme='teal'
          onClick={() => handleSubmit()}
        >
          Add
        </Button>
      </HStack>
    )
}

export default AddTodo;