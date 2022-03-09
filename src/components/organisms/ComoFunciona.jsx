import React from 'react'
import { Box, SimpleGrid, Heading, Flex, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'

// Faltam setas separadores

const ComoFunciona = () => {
    return (
<>
<Box align="center" textColor="#fff" bgColor="#fff" p={{base:"10", md:"0 10 "}}>

  <SimpleGrid columns={{base:"1", md:"4"}} spacing={10} maxW="1250px">
      <Flex p="5" rounded="xl" boxShadow="2xl" bgColor="#1F0E59" direction="column" >
      <Heading textColor="#F2A03D" as="h3" alignSelf="center" lineHeight="1.1" rounded="50%" border="7px solid #fff" w="62px" h="62px" fontWeight="bold" fontSize="40px">1</Heading>
      <Text pt="10px" fontSize="18px">Solicite o saque-aniversário no aplicativo do FGTS ou da Caixa</Text>
      </Flex>

      <Flex p="5" rounded="xl" boxShadow="2xl" bgColor="#1F0E59" direction="column" >
      <Heading textColor="#F2A03D" as="h3" alignSelf="center" lineHeight="1.1" rounded="50%" border="7px solid #fff" w="62px" h="62px" s fontWeight="bold" fontSize="40px">2</Heading>
      <Text pt="10px" fontSize="18px">Clique em "autorizar banco a consultar suas informações do FGTS".</Text>
      </Flex>

      <Flex p="5" rounded="xl" boxShadow="2xl" bgColor="#1F0E59" direction="column" >
      <Heading textColor="#F2A03D" as="h3" alignSelf="center" lineHeight="1.1" rounded="50%" border="7px solid #fff" w="62px" h="62px" s fontWeight="bold" fontSize="40px">3</Heading>
      <Text pt="10px" fontSize="18px"> Entre em contato com a Meu Crédito Liberado para solicitar o crédito saque-aniversário.</Text>
      </Flex>
      
      <Flex p="5" rounded="xl" boxShadow="2xl" bgColor="#1F0E59" direction="column" >
      <Heading textColor="#F2A03D" as="h3" alignSelf="center" lineHeight="1.1" rounded="50%" border="7px solid #fff" w="62px" h="62px" s fontWeight="bold" fontSize="40px">4</Heading>
      <Text pt="10px" fontSize="18px">Depois de aprovado, o dinheiro entrará na sua conta em até 24 horas.</Text>
      </Flex>
  </SimpleGrid> 

</Box>
</>
    )}
export default ComoFunciona