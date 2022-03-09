import React from 'react'
import { Flex, Box, Text, Spacer } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'

const CtaHero = () => {
    return (
<>
<Box p="8" backgroundColor="#1F0E59" color="white" align="center"  >
        <Flex maxW="1272px" align="center" direction={{base: "column", md: "row"}} >
            <Box pb={{base:5, md:0}}>
                <Text fontWeight="bold" textAlign="start" fontSize="30px" >
                Preencha os dados para entrar em contato e realizar uma simulação com o nosso time:
                </Text>
                <Text fontWeight="normal" color="#F2A03D" textAlign="start" fontSize="20px" >
                Ao informar meus dados, eu concordo com a Política de Privacidade.
                </Text>
            </Box>
            <Spacer/>
            <Flex align={{base: "center", md: "end"}} direction={{base: "column", md: "column"}}>
                <Input w="100%" backgroundColor="#fff" focusBorderColor='#dbbf9b' textColor="#141928" colorScheme="red" placeholder="Email*" size="lg" mb="3" />
                <Input w="100%" backgroundColor="#fff" focusBorderColor='#F2A03D' textColor="#141928" colorScheme="red" placeholder="Nome*" size="lg" mb="3" />
                <Flex><Input w="50%" backgroundColor="#fff" focusBorderColor='#F2A03D' textColor="#141928" colorScheme="red" placeholder="Celular*" size="lg" mr="3" />
                <Button fontWeight="black" fontSize="16px" color="#1F0E59" colorScheme="whiteAlpha" bgColor="#F2A03D" px="40px" size="lg" variant="solid" >Simule Já!</Button>
                </Flex>
            </Flex>
        </Flex>
</Box>
</>
    )}


export default CtaHero