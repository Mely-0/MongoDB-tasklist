import { Box, Image, Text, Button } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import Nav from './nav'
const Home = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/Formulario")
  }
  return (
    <>
      <Nav />
      <Box w={"100%"} h={"100%"} display={"flex"} justifyContent="center"
        alignItems={"center"}>
        <Box w={"70%"} h={"70%"} display={"flex"}>
          <Box w={"50%"} h={"100%"} display={"flex"} alignItems={"flex-star"} flexDirection={"column"} justifyContent={"center"}>
            <Box w={"90%"} h={"30%"} display={"flex"} flexDirection={"column"}>
              <Text fontSize='60px' color='#7944d3' as="b">
                Welcome
              </Text>
              <Text fontSize='40px' color='#7944d3' as="b">
                Organize your day
              </Text>
            </Box>
            <Box w={"60%"} h={"25%"} display={"flex"} justifyContent={"center"} alignItems={"cemter"} textAlign={"justify"}>
              <Text color={"black"} as={"b"}>In this application you can do a lot of things, it's a virtual task list which purpose is to maintain your life more organized and simple, with the functionality of read, create, update and delete</Text>
            </Box>
            <Box w={"60%"} h={"30%"} >
              <Button
                size='md'
                height='48px'
                width='200px'
                border='2px'
                borderColor='#7944d3'
                color={"#7944d3"}
                onClick={redirect}
              >
                <Text>Organize your day</Text>
              </Button>
            </Box>
          </Box>
          <Box w={"50%"}
            h={"100%"}
            backgroundImage="url(/welcome2.png)"
            backgroundSize={"100% 80%"}
            backgroundRepeat="no-repeat"
          >
          </Box>
        </Box>
      </Box>
    </>

  )
}

export default Home