import React from 'react'
import { Box } from '@chakra-ui/react'
import { Text, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';

const Nav3 = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('#aae0c0', '#2c4436')
    const color = useColorModeValue('black', 'white.900')
    return (
        
        <Box bg={bg} color={color} w='100%' p={4} h='8%'>
            <Box width={"10%"} marginLeft="95%">
            <Button variant='link' onClick={toggleColorMode} >
                {colorMode === 'light' ? '🌛' : '🌝'}
            </Button>
            </Box>
        </Box>
    )
}

export default Nav3