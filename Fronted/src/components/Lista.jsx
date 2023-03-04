import { useState } from 'react'
import './css/lista.css'
import { GoTrashcan } from "react-icons/go";
import { BiEditAlt } from "react-icons/bi";
import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Text,
    useColorModeValue, Input
} from '@chakra-ui/react'
import {
    useDeleteEliminarTareaMutation,
    useGetObtenerTareasQuery,
    usePutActualizarTareaMutation
}
    from './storeRedux/peticiones';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { useAuthStore } from './storeRedux/zustand';
const Lista = ({ exitoo, msgAgg, msgCreated }) => {
    const color = useColorModeValue('black', 'black')
    const bg = useColorModeValue(' rgb(217, 235, 228)', '#2c4436')
    const profileAuth = useAuthStore((state) => state.profile)
    //traer
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { data: dataTareas } = useGetObtenerTareasQuery(profileAuth?.token)

    //eliminar
    const [eliminar] = useDeleteEliminarTareaMutation()
    const [msg, setMsg] = useState(false)

    const deleteTaks = (_id) => {
        eliminar({ _id, token: profileAuth?.token })
        setMsg(true)
        setTimeout(() => {
            setMsg(false)
        }, 1000);
    }
    //actualizar
    const [actualizar] = usePutActualizarTareaMutation()
    const [presionado, setPresionado] = useState(false);
    const [tarea, setTarea] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [editar, seteditar] = useState("");
    const [ide, setIde] = useState("");
    console.log(ide);
    const [checke, setChecke] = useState(false)
    const [check, setCheck] = useState("tareas")
    const handleOpen2 = (_id, tarea, descripcion) => {
        actualizar({
            _id,
            dataTask: { tarea: tarea, descripcion: descripcion },
            token: profileAuth?.token
        })
    }
    const editTarea = (e) => {
        setTarea(e.target.value)
    }
    const editDescripcion = (e) => {
        setDescripcion(e.target.value)
    }
    return (
        <>
            <Box width={"100%"} height="70%" >
                {dataTareas === "" ? (
                    <Box width={"100%"}
                        height={"20%"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    ><Text as='b' marginRight={"10px"} color={color}>
                            No hay tareas aun
                        </Text>
                    </Box>) :
                    (
                        <div className='div-tasklist'>
                            {dataTareas?.map((item) => {
                                return (
                                    <>
                                        <div className="div-task" key={item._id}>
                                            <Text as='b' color={color}>{item.tarea}</Text>
                                            <hr />
                                            <div className="cont-auto">
                                                <div className='cont-task'>
                                                    <div className='containerDescripcion'>
                                                        <div className='check-box'>
                                                            <input type="checkbox"
                                                                className='myCheck'
                                                                onClick={() => {
                                                                    if (checke === true) {
                                                                        setIde(item._id)
                                                                        setChecke(false)
                                                                        console.log(!checke);
                                                                        setCheck("tareas")
                                                                    } else if (checke === false) {
                                                                        setIde(item._id)
                                                                        setChecke(true)
                                                                        setCheck("check")
                                                                        console.log(!checke);
                                                                    }
                                                                }}
                                                            />
                                                            {
                                                                ide === item._id && checke === true ? (
                                                                    <div className='tex-des'>
                                                                        <Text className={check} color={color}>
                                                                            {item.descripcion}
                                                                        </Text>
                                                                    </div>
                                                                ) : <div className='tex-des'>
                                                                    <Text color={color}>
                                                                        {item.descripcion}
                                                                    </Text>
                                                                </div>
                                                            }
                                                        </div>
                                                    </div>
                                                    {ide === item._id && checke ? (<div className='iconos'>
                                                        <Button size='xs' colorScheme='red' onClick={() => { deleteTaks(item._id); setChecke(false) }}><GoTrashcan /></Button>
                                                        <Button
                                                            size='xs'
                                                            colorScheme={"green"}
                                                            onClick={() => {
                                                                onOpen()
                                                                setPresionado(true)
                                                                setTarea(item.tarea)
                                                                setDescripcion(item.descripcion)
                                                                seteditar(item._id)
                                                            }}
                                                        >
                                                            <BiEditAlt />
                                                        </Button>

                                                    </div>) : (<div className='iconos'>
                                                        <Button isDisabled size='xs' colorScheme='red' onClick={() => { deleteTaks(item._id) }}><GoTrashcan /></Button>
                                                        <Button
                                                            size='xs'
                                                            colorScheme={"green"}
                                                            onClick={() => {
                                                                onOpen()
                                                                setPresionado(true)
                                                                setTarea(item.tarea)
                                                                setDescripcion(item.descripcion)
                                                                seteditar(item._id)
                                                            }}>
                                                            <BiEditAlt />
                                                        </Button>
                                                    </div>)}
                                                </div>
                                            </div>
                                            <div className='cont-up' >
                                                {editar === item._id && presionado ?
                                                    <div>
                                                        <Modal isOpen={isOpen} onClose={onClose}>
                                                            <ModalOverlay />
                                                            <ModalContent>
                                                                <ModalHeader textAlign={"center"}>Update</ModalHeader>
                                                                <ModalCloseButton />
                                                                <ModalBody>
                                                                    <form>
                                                                        <div className='cont-update'>
                                                                            <div className='upInput'>
                                                                                <Input type="text"
                                                                                    className='input2'
                                                                                    value={tarea}
                                                                                    name='tareaUp' onChange={editTarea} />
                                                                                <Input type="text"
                                                                                    className='input2'
                                                                                    value={descripcion}
                                                                                    name='descripcionUp' onChange={editDescripcion} />
                                                                            </div>
                                                                            <Button
                                                                                size='xs'
                                                                                bg={"#e3cbff"}
                                                                                onClick={(e) => {
                                                                                    e.preventDefault()
                                                                                    handleOpen2(item._id, tarea, descripcion)
                                                                                    setPresionado(false)
                                                                                }}>Save</Button>
                                                                            <Button
                                                                                size='xs'
                                                                                colorScheme={"red"}
                                                                                onClick={(e) => {
                                                                                    e.preventDefault()
                                                                                    setPresionado(false)
                                                                                }}
                                                                            >
                                                                                Cancel
                                                                            </Button>
                                                                        </div>
                                                                    </form>
                                                                </ModalBody>
                                                            </ModalContent>
                                                        </Modal>
                                                    </div>
                                                    : null}
                                            </div>
                                        </div>
                                    </>

                                )
                            })

                            }</div>)}
            </Box>
            {msg ?
                (
                    <Box width="100%" display="flex" justifyContent="center" position="absolute" top="82%">
                        <Alert
                            status='success'
                            colorScheme={"red"}
                            w="40vh" h="52px"
                            display="flex" gap="10px">
                            <AlertIcon
                                h="32px" />
                            <Text color={color}>Task deleted</Text>
                        </Alert>
                    </Box>
                )
                : (null)}
            {msgAgg && exitoo ?
                (
                    <Box width="100%" display="flex" justifyContent="center" position="absolute" top="82%">
                        <Alert
                            status='success'
                            bg='#66cd91'
                            w="40vh" h="52px"
                            display="flex" gap="10px">
                            <AlertIcon
                                h="32px" />
                            <Text color={color}>Added Task</Text>
                        </Alert>
                    </Box>
                )
                : null}
        </>
    )
}

export default Lista