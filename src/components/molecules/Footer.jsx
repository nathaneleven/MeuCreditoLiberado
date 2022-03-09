import React from 'react'
import { Box, Flex, Link, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

const  Footer = () => {
    return (
    <>
    
      <Box border="1" fontWeight="bold" bgColor="#f3f4f4" color="#141928" align="center">
        <Box p="8" bgColor="#F2A03D" color="#fff" >
                <Flex maxW="1272px" justifyContent="center"  textAlign="center" alignContent="center">
                <Link href="#"><Image src="/icone-linkedin-footer.svg" pr="10px" alt="Ícone linkedin footer" /></Link>
                <Link href="#"><Image src="/icone-instagram-footer.svg" pr="10px" alt="Ícone instagram footer" /></Link>
                <Link href="#"><Image src="/icone-facebook-footer.svg" pr="10px" alt="Ícone facebook footer" /></Link>
                <Link href="#"><Image src="/icone-whatsapp-footer.svg" alt="Ícone whatsapp footer" /></Link>

                </Flex>
            </Box>
            
        <Box p="3" bgColor="#1F0E59" color="white" align="center"  >
            <Box w="100%">
              <Text>© 2022 meucreditoliberado.com.br - Uma Empesa Eleven Rush - Todos os Direitos Reservados® CNPJ: 431322390001-28</Text>
            </Box>
        </Box>
      </Box>
    </>
)}
export default Footer