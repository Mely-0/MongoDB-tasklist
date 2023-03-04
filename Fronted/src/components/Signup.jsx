import React, { useState } from 'react'
import './css/login.css'
import Nav2 from './nav2'
import '../components/css/lista.css'
import { Box, Text, Input, Alert, AlertIcon } from '@chakra-ui/react'
import { FcOk } from "react-icons/fc";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    AlertTitle,
    AlertDescription
} from '@chakra-ui/react'
import { useColorModeValue, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { usePostAgregarUserMutation } from './storeRedux/peticiones'
const Singup = () => {
    const [fullName, setFullName] = useState("")
    const [usuario, setUsuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [email, setEmail] = useState("")
    const [msgAggUser, setMsgAggUser] = useState(false)
    const [msgRequire, setMsgRequire] = useState(false)
    const [boolean, setBoolean] = useState(false)
    const [contraseña1, setContraseña1] = useState(false)
    const navigate = useNavigate()
    //post
    const [dataUser, {
        data: datos,
        error,
        isError,
        isSuccess: exitoso
    }] = usePostAgregarUserMutation();
    let mensaje = error?.data?.mensaje
    

    //toggle mode
    const color = useColorModeValue('black', 'black')
    const bg = useColorModeValue('white', '#dfdfdf')
    //envio de datos
    const handleSubmit = (e) => {
        e.preventDefault(e);
        const fullName = e.target.fullName.value;
        const usuario = e.target.usuario.value;
        const contraseña = e.target.contraseña.value;
        const email = e.target.email.value;

        if (usuario !== "" && contraseña !== "" && email !== "" && fullName !== "") {
            dataUser({
                usuario, contraseña, email, fullName,
            })
            setBoolean(false)
            setTimeout(() => {
                setMsgAggUser(true)
                setTimeout(() => {
                    setMsgAggUser(false)
                }, 2000);
            }, 0);
            setUsuario("")
            setContraseña("")
            setFullName("")
            setEmail("")
        }else{
            setBoolean(true)
            setTimeout(() => {
                setBoolean(true)
                setTimeout(() => {
                    setBoolean(false)
                }, 2000);
            }, 0);
        }
    }
    
    const onClick1 = (e) => {
        e.preventDefault()
        navigate("/login")
    }
    const onClick = (e) => {
        e.preventDefault()
        navigate("/signOut")
    }
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Nav2 />
            <Box width={"100%"}
                h={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}>
                <div className='cont-pro'>
                    <div className='img'></div>
                    <div className='log'>
                        <Box width={"100%"}
                            h={"100%"} bg={bg}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            flexDirection={"column"}>
                            <div className='cont-login'>
                                <Box
                                    w={"100%"}
                                    h={"50%"}
                                    display={"flex"}
                                    justifyContent={'flex-end'}>
                                    <Box
                                        display={"flex"}
                                        width={"40%"}
                                        height={"100%"}
                                        colorScheme={"purple"}
                                        alignItems={"center"} >
                                        <Button
                                            colorScheme={"purple"}
                                            variant='outline'
                                            onClick={onClick}
                                            borderRadius={"30px 0px 0px 30px"}
                                            h={"60%"}>
                                            Signup
                                        </Button>
                                        <Button
                                            colorScheme={"purple"}
                                            onClick={onClick1}
                                            borderRadius={"0px 30px 30px 0px"}
                                            h={"60%"}>
                                            Login
                                        </Button>
                                    </Box>
                                </Box>
                                <Box display={"flex"}
                                    alignItems={"center"}
                                    flexDirection={"column"}
                                    gap={"20px"}
                                    width={"100%"}
                                    height={"87%"}>
                                    <form onSubmit={handleSubmit}>
                                        <div className='login-app'>
                                            <div className='input-form'>
                                                <div className='inp'>
                                                    <Input
                                                        variant='flushed'
                                                        color={color}
                                                        placeholder="Full name"
                                                        _placeholder={{ opacity: 0.9, color: color }}
                                                        value={fullName}
                                                        name='fullName'
                                                        onChange={(e) => {
                                                            e.preventDefault()
                                                            setFullName(e.target.value)
                                                        }}>
                                                    </Input>
                                                    {fullName.length > 35 ? <Text as={"b"} color={"red"}> Character limit exceeded</Text> : null}
                                                    <Input
                                                        variant='flushed'
                                                        color={color}
                                                        placeholder="User"
                                                        _placeholder={{ opacity: 0.9, color: color }}
                                                        value={usuario}
                                                        name='usuario'
                                                        onChange={(e) => {
                                                            e.preventDefault()
                                                            setUsuario(e.target.value)
                                                        }}>
                                                    </Input>
                                                    {usuario.length > 15 ? <Text as={"b"} color={"red"}> Character limit exceeded</Text> : null}
                                                    <Input
                                                        variant='flushed'
                                                        type={"password"}
                                                        placeholder="Password"
                                                        value={contraseña}
                                                        _placeholder={{ opacity: 0.9, color: color }}
                                                        name='contraseña'
                                                        onChange={(e) => {
                                                            e.preventDefault(e)
                                                            setContraseña(e.target.value)
                                                        }}>
                                                    </Input>
                                                    { contraseña.length !== 0  && contraseña.length <=8 ?<Text as={"b"} color={"red"}> The password is very weak</Text>  :null}
                                                    <Input
                                                        variant='flushed'
                                                        type={"email"}
                                                        placeholder="Email"
                                                        value={email}
                                                        _placeholder={{ opacity: 0.9, color: color }}
                                                        name='email'
                                                        onChange={(e) => {
                                                            e.preventDefault(e)
                                                            setEmail(e.target.value)
                                                        }}>
                                                    </Input>
                                                </div>
                                                {fullName.length <34 && usuario.length <15 && contraseña.length >8 ? 
                                                    <Button
                                                    type='submit'
                                                    width={"60%"}
                                                    borderRadius={"30px"}
                                                    bg={"#9c54ff"}
                                                    color={"white"}
                                                    h={"10%"}
                                                    onClick={onOpen}>
                                                    Create User
                                                </Button>
                                                :
                                                    <Button
                                                        type='submit'
                                                        width={"60%"}
                                                        isDisabled
                                                        borderRadius={"30px"}
                                                        bg={"#9c54ff"}
                                                        color={"white"}
                                                        h={"10%"}
                                                        onClick={onOpen}>
                                                        Create User
                                                    </Button> }
                                                
                                            </div>
                                        </div>
                                    </form>
                                </Box>
                            </div>
                            <Box width={"80%"}
                                h={"10%"}>
                                {msgAggUser && exitoso ?
                                    <>
                                        <Modal isOpen={isOpen} onClose={onClose}>
                                            <ModalOverlay />
                                            <ModalContent>
                                                <ModalCloseButton />
                                                <ModalBody bg={"#aae0c0"}>
                                                    <Box width={"100%"} height={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                                        <FcOk />
                                                        <Text as={"b"}>Created user</Text>
                                                    </Box>
                                                </ModalBody>
                                            </ModalContent>
                                        </Modal>
                                    </>
                                    : null}
                            </Box>
                            <Box width={"100%"} display="flex" alignItems={"center"} justifyContent="center">
                                {boolean  ? <Text textAlign={"center"} as={"b"} color={"red"}>All fields are required</Text> : null}
                            </Box>
                        </Box>
                    </div>
                </div>
            </Box>
        </>
    )
}
export default Singup; 