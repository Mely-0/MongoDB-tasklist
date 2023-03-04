import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { Text, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';

const Nav2 = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('#aae0c0', '#2c4436')
    const color = useColorModeValue('black', 'white.900')
    const navigate = useNavigate()
    const onClick=(e)=>{
        e.preventDefault()
        navigate("/")
    }
    return (
        
        <Box bg={bg} color={color} w='100%' p={4} h='8%'>
            <Box width={"10%"} marginLeft="90%">
            <Button variant='link' onClick={toggleColorMode} >
                {colorMode === 'light' ? '🌛' : '🌝'}
            </Button>
            <Button onClick={onClick}>about Me</Button>
            </Box>
        </Box>
    )
}

export default Nav2