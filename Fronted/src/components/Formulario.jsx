import React from 'react'
import { useState } from 'react';
import Lista from './Lista';
import './css/lista.css'
import { usePostAgregarTareasMutation } from './storeRedux/peticiones';
import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Button, Text } from '@chakra-ui/react';
import {
    Input
} from '@chakra-ui/react'
import { useAuthStore } from './storeRedux/zustand';
import Nav from './nav';
const Formulario = () => {
    const profileAuth = useAuthStore((state) => state.profile)
    const [msgAgg, setMsgAgg] = useState(false)
    const [tarea, setTarea] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    //agregar
    const [
        createUser,
        {
            data: msgCreated,
            // isError,
            // error: msgErrorUserCreated,
            isSuccess: exitoo
        }
    ] = usePostAgregarTareasMutation()
    
    
    
    
    const hadleSubmit = async (e) => {
        e.preventDefault();
        const inputs = { tarea: e.target.tarea.value, descripcion: e.target.descripcione.value }
        
        if (inputs.tarea !== "" && inputs.descripcion !== "") {
            await createUser({
                dataTask: inputs,
                token: profileAuth.token
            });
            onClose()
            setTimeout(() => {
                setMsgAgg(true)
                setTimeout(() => {
                    setMsgAgg(false)
                }, 1000);
            }, 0);
        } else {
            alert("nada")
        }
        setTarea("")
        setDescripcion("")
    }

    return (
        <>
        <Nav/>
        <Box width={"100%"} h={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <div className='contenedor'>
                <div className='title' />
                <button className="button" onClick={onOpen}>
                    <Text as='b' color={"black"}>Add
                    </Text>
                </button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader textAlign={"center"}>Add new task</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <form
                                onSubmit={hadleSubmit}
                                className='formulario'
                            >
                                <div className='inputs'>
                                    <label htmlFor="">Name:</label>
                                    <Input type="text"

                                        placeholder='Task Name'
                                        name='tarea'
                                        value={tarea}
                                        onChange={(e) => {
                                            e.preventDefault()
                                            setTarea(e.target.value)

                                        }}
                                    />
                                    {tarea.length >= 17 ? <>
                                        <Text as='b' color={"red"}>A exceeded the limit
                                        </Text>
                                    </> : null}
                                    <label htmlFor="">Description:</label>
                                    <Input type="text"

                                        placeholder='Task description'
                                        name='descripcione'
                                        value={descripcion}
                                        onChange={(e) => {
                                            e.preventDefault()
                                            setDescripcion(e.target.value)

                                        }}
                                    />
                                </div>
                                <Box w={"90%"} display="flex" justifyContent={"flex-end"}>
                                    {tarea.length > 3 && descripcion.length > 3 && tarea.length <= 17 ? <Button size='sm' type="submit" className='btn-1' value="click" colorScheme={"red"} bg={"#e3cbff"} >Add</Button> : (<Button size='sm' type="submit" isDisabled className='btn-1' bg={"#e3cbff"}> Add</Button>)}
                                </Box>
                            </form>
                        </ModalBody>
                    </ModalContent>
                </Modal>

                <Lista exitoo={exitoo} msgAgg={msgAgg} msgCreated={msgCreated} />
            </div>
        </Box>
        </>
    )
}
export default Formulario;