import { Button, Text, Box, Grid, GridItem } from '@chakra-ui/react'
import { FcDecision } from "react-icons/fc";
import './css/login.css'
import React from 'react'
import Nav3 from './nav3'
import { useNavigate } from 'react-router-dom';

const SobreNosotros = () => {
    const navigate = useNavigate()
    const login=(e)=>{
    navigate("/Login")
    }
    return (
        <>
            <Nav3 />
            <Box w={"100%"}
                h={"100%"}
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}>
                <Box w={"60%"} h={"75%"} display={"flex"}>
                    <Box w={"30%"} h={"100%"}
                        backgroundImage="url(/aboutMe.png)"
                        backgroundSize={"100% 100%"}
                        backgroundRepeat="no-repeat">
                    </Box>
                    <Box w={"70%"}
                        bg={"#f6dfff"}
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems="center"
                    >
                        <Box width={"100%"}
                            height={"30%"}
                            display={"flex"}
                            flexDirection={"column"}
                            alignItems="center" >
                            <Box width={"100%"} display={"flex"} justifyContent="center"
                                alignItems={"center"}>
                                <Button w={"30px"} h={"30px"} bg={"#9859ff"} borderRadius={"40%"}>
                                    🕵️
                                </Button>
                                <Text fontSize='25px' as={"b"} textAlign={"center"}>
                                    ¿Who am I?
                                </Text>
                            </Box>
                            <Box w={"60%"} >
                                <Text textAlign={"justify"}>
                                    I'm Melany Martinez. I'm 17 years old. I'm part of the E.T foundation, I'm currently a programming student.
                                </Text>
                            </Box>

                            <Text fontSize='25px' as={"b"} textAlign={"center"}>
                                Facts about me
                            </Text>
                        </Box>
                        <Box
                            w={"80%"}
                            h={"60%"}
                        >
                            <Grid
                                templateAreas={`"cont1 cont2"
                        "cont3 cont4"`}
                                gridTemplateRows={'160px 1fr 160px'}
                                gridTemplateColumns={'285px 1fr'}
                                h='490px'
                                gap='1'
                                color='blackAlpha.700'
                                fontWeight='bold'
                            >
                                <GridItem
                                    pl='2'
                                    bg='white'
                                    area={'cont1'}
                                    borderRadius="20px"
                                    display={"flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}>
                                    <Box width={"90%"} height={"90%"} bg={"white"} display={"flex"}
                                        alignItems={"center"}
                                        flexDirection="column">
                                        <Box width={"100%"}
                                            display={"flex"}
                                            justifyContent="center"
                                            alignItems={"center"}
                                            height="20%"
                                        >
                                            <Button w={"30px"} h={"30px"} bg={"#fffb00"} borderRadius={"40%"}>
                                                🧚🏼‍♀️
                                            </Button>
                                            <Text fontSize='20px' as={"b"} textAlign={"center"} color="black">
                                                Personal
                                            </Text>
                                        </Box>
                                        <Box width={"80%"}
                                            display={"flex"}
                                            alignItems={"center"}
                                            height="80%"
                                        >
                                            <Text fontSize='15px' as={"b"} textAlign={"justify"}>
                                                I am an extroverted person at times and sometimes too introverted
                                            </Text>
                                        </Box>
                                    </Box>
                                </GridItem>
                                <GridItem
                                    pl='2'
                                    bg='white'
                                    area={'cont2'}
                                    borderRadius="20px"
                                    display={"flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}>
                                    <Box width={"90%"} height={"90%"} bg={"white"} display={"flex"}
                                        alignItems={"center"}
                                        flexDirection="column">
                                        <Box width={"100%"}
                                            display={"flex"}
                                            justifyContent="center"
                                            alignItems={"center"}
                                            height="20%"
                                        >
                                            <Button w={"30px"} h={"30px"} bg={"#59ddff"} borderRadius={"40%"}>
                                                🙊
                                            </Button>
                                            <Text fontSize='20px' as={"b"} textAlign={"center"} color="black">
                                                Fun facts
                                            </Text>
                                        </Box>
                                        <Box width={"80%"}
                                            display={"flex"}
                                            justifyContent="center"
                                            alignItems={"center"}
                                            height="80%"
                                        >
                                            <Text fontSize='15px' as={"b"} textAlign={"center"}>
                                            I'm Team Calor and I'm the to-do list developer
                                            </Text>
                                        </Box>
                                    </Box>
                                </GridItem>
                                <GridItem
                                    pl='2'
                                    bg='white'
                                    area={'cont3'}
                                    borderRadius="20px"
                                    display={"flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}>
                                    <Box width={"90%"} height={"90%"} bg={"white"} display={"flex"}
                                        alignItems={"center"}
                                        flexDirection="column">
                                        <Box width={"100%"}
                                            display={"flex"}
                                            justifyContent="center"
                                            alignItems={"center"}
                                            height="20%"
                                        >
                                            <Button w={"30px"} h={"30px"} bg={"#ff59cc"} borderRadius={"40%"}>
                                                😡
                                            </Button>
                                            <Text fontSize='20px' as={"b"} textAlign={"center"} color="black">
                                                Things I hate
                                            </Text>
                                        </Box>
                                        <Box width={"80%"}
                                            display={"flex"}
                                            alignItems={"center"}
                                            height="80%"
                                        >
                                            <Text fontSize='15px' as={"b"} textAlign={"justify"}>
                                                I don't like to be unpunctual, I don't like soup, I don't like disorder
                                            </Text>
                                        </Box>
                                    </Box>
                                </GridItem>
                                <GridItem
                                    pl='2'
                                    bg='white'
                                    area={'cont4'}
                                    borderRadius="20px"
                                    display={"flex"}
                                    justifyContent={"center"}
                                    alignItems={"center"}>
                                    <Box width={"90%"} height={"90%"} bg={"white"} display={"flex"}
                                        alignItems={"center"}
                                        flexDirection="column">
                                        <Box width={"100%"}
                                            display={"flex"}
                                            justifyContent="center"
                                            alignItems={"center"}
                                            height="20%"
                                        >
                                            <Button w={"30px"} h={"30px"} bg={"#29af3f"} borderRadius={"40%"}>
                                                😍
                                            </Button>
                                            <Text fontSize='20px' as={"b"} textAlign={"center"} color="black">
                                                Things I like
                                            </Text>
                                        </Box>
                                        <Box width={"80%"}
                                            display={"flex"}
                                            alignItems={"center"}
                                            height="80%"
                                        >
                                            <Text fontSize='15px' as={"b"} textAlign={"justify"}>
                                                I am an extroverted person at times and sometimes too introverted
                                            </Text>
                                        </Box>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </Box>
                        <Box w={"100%"} h={"10%"} display="flex" justifyContent={"center"} alignItems={"center"}>
                        <Button
                        size='md'
                        height='48px'
                        width='200px'
                        border='2px'
                        borderColor='#7944d3'
                        color={"#7944d3"}
                        onClick={login}
                        marginLeft={"60%"}
                        marginBottom={"5%"}
                        >
                        <Text>Know my to-do list</Text>
                        </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default SobreNosotros