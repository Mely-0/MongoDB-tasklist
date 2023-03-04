
import { Box, ChakraProvider, useColorModeValue } from '@chakra-ui/react';
import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Singup from './components/Signup';

const Home = lazy(() => import("./components/home"))
const Formulario = lazy(() => import("./components/Formulario"))
const Login = lazy(() => import("./components/login"))
const SobreNosotros = lazy(() => import("./components/Sobrenosotros"))

function App() {
  const bg = useColorModeValue('#ddece3', '#2c4436')
  return (
    <ChakraProvider>
      <Suspense>
        <Box w={"100%"} height={"100%"} bg={bg} display={"flex"}
          alignItems={"center"} flexDirection={"column"}>
          <Routes>
            <Route path='/' element={<SobreNosotros />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/SignOut' element={<Singup/>}/>
            <Route path='/Home' element={<Home />} />
            <Route path='/Formulario' element={<Formulario />} />
          </Routes>
        </Box>
      </Suspense>
    </ChakraProvider>
  );
}

export default App;
