import {useState} from 'react';
import {useForm} from '@mantine/form';
import {Button, Modal, Group} from '@mantine/core';

function AddTodo(){
    const [open, setOpen] = useState(false)

    const form = useForm({
        initialValues:{
            title: "",
            body: "",
        },
    });

    return ( 
      <>
        <Modal opened={open} onClose={() => setOpen(false)} title="Create Todo">
          text
        </Modal>
        <Group position="center">
            <Button fullWidth mb={12} onClick={() => setOpen(true)}>
                Add ToDo
            </Button>
        </Group>
      </>
    )
}

export default AddTodo