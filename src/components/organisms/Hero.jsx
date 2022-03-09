import React from 'react'
import { Flex, Box, Heading, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

const Hero = () => {
    return (
        <>
        <Box w="100%" align="center" backgroundColor="#fff">
        <Flex p={["4","5","6","7","8"]} py="20px !important" maxW="1272px" textAlign="left" flexDirection={['column', 'column', 'column', 'row',"row"]} >

        <Flex w={["100%","100%","100%","50%","50%"]} alignSelf="center" flexDirection={["column"]}>
            <Heading pb="20px" fontSize="52px" color="#F2A03D" as="h1">
            Meu Crédito Liberado<br/>
            <Box as="span" fontSize="46px" color="#1F0E59">Antecipe seu FGTS conosco</Box>
            </Heading>
            <Text pb="20px" color="#3C3E42" fontSize="20px" as="h3">
            Aqui na Meu Crédito Liberado, você conta com uma equipe de especialistas em saúde financeira, que irão te auxiliar em todas as etapas do processo de antecipação do saque-aniversário do FGTS, além de tirar todas as suas dúvidas sobre o assunto!
            </Text>
        </Flex>

        <Flex w={["100%","100%","100%","50%","50%"]} flexDirection={["column"]} align="center">
        <Image src='/imagem-hero.png'/>
        </Flex>

        </Flex>
        </Box>
        </>
    )
}

export default Hero
