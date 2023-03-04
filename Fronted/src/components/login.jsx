import React from 'react'
import './css/login.css'
import Nav2 from './nav2'
import '../components/css/lista.css'
import { Box, Button, Input, useColorModeValue } from '@chakra-ui/react'
import { useAuthStore } from './storeRedux/zustand'
import { loginRequest } from './storeRedux/loginRequest'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const setProfileAuth = useAuthStore((state) => state.setProfile)
  const [dataLogin, setDataLogin] = useState({
    usuario: "",
    contraseña: ""
  })
  const [validate, setValidate] = useState({
    usuario: null,
    contraseña: null
  })
  console.log(dataLogin);
  const handleChange = (e) => {
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value })
    if (e.target.name === "usuario") {
      setValidate({ ...validate, usuario: e.target.value.length === 0 ? "se requiere llenar el campo" : "" })
    }
    if (e.target.name === "contraseña") {
      setDataLogin({ ...dataLogin, contraseña: e.target.value })
      setValidate({ ...validate, contraseña: e.target.value.length < 8 ? "Contraseña muy corte" : "" })
    }

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginRequest(dataLogin)
    setProfileAuth(data?.data)
    navigate(`/home`)
  }
  const onClick1 = (e) => {
    e.preventDefault()
    navigate("/Login")
  }
  const onClick = (e) => {
    e.preventDefault()
    navigate("/signOut")
  }
  const color = useColorModeValue('black', 'black')
  const bg = useColorModeValue('white', '#dfdfdf')
  return (
    <>
      <Nav2 />
      <Box width={"100%"}
        h={"100%"} display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}>
        <div className='cont-pro'>
          <div className='img'></div>
          <div className='log'>
            <Box width={"100%"} h={"100%"} bg={bg} display={"flex"} alignItems={"center"} justifyContent={"center"}>
              <div className='cont-login'>
                <Box w={"100%"} h={"40px"} display={"flex"} justifyContent={'flex-end'}>
                  <Box display={"flex"} width={"40%"} height={"100%"} >
                    <Button colorScheme={"purple"} onClick={onClick1} variant='outline' borderRadius={"30px 0px 0px 30px"} h={"70%"}>Login</Button>
                    <Button colorScheme={"purple"} onClick={onClick} borderRadius={"0px 30px 30px 0px"} h={"70%"}>Signup</Button>
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap={"20px"} width={"100%"} h={"100%"}>
                  <form onSubmit={handleSubmit} className="form">
                    <div className='login-app'>
                      <div className='input-form'>
                        <div className='inp'>
                          <Input
                            w={"100%"}
                            variant='flushed'
                            color={color}
                            placeholder="User"
                            _placeholder={{ opacity: 0.9, color: color }}
                            name='usuario'
                            onChange={handleChange}>
                          </Input>
                          <Input
                            variant='flushed'
                            color={color}
                            type={"password"}
                            placeholder="Password"
                            _placeholder={{ opacity: 0.9, color: color }}
                            name='contraseña'
                            onChange={handleChange}>
                          </Input>
                        </div>
                        <Button type='submit' width={"60%"} borderRadius={"30px"} bg={"#9c54ff"} color={"white"} h={"15%"}>Login</Button>
                      </div>
                    </div>
                  </form>
                </Box>
              </div>
            </Box>
          </div>
        </div>
      </Box>
    </>
  )
}
export default Login; 