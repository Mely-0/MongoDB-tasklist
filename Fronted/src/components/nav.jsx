
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { Text, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { useAuthStore } from './storeRedux/zustand';

const Nav = (nameUser) => {
    const navigate = useNavigate();
    const setLogOut = useAuthStore((state) => state.logOut)
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('#aae0c0', '#2c4436')
    const color = useColorModeValue('black', 'white.900')
    const onClick = () => {
        setLogOut("", null)
        navigate("/Login")
    }

    return (
        <Box bg={bg} color={color} w='100%' p={4} h='8%' display={"flex"}>
            <Box width={"90%"} display={"flex"}>
            <Link to="/Home">
                <Text ml='20px' as='b'>Home</Text>
            </Link>
            <Link to="/Formulario">
                <Text ml='20px' as='b'>Task list</Text>
            </Link>
            </Box>
            <Box width={"10%"}>
            <Button variant='link' onClick={toggleColorMode} >
                {colorMode === 'light' ? '🌛' : '🌝'}
            </Button>
            <Button onClick={onClick}>logout</Button>
            </Box>
            
        </Box>
    )
}

export default Nav