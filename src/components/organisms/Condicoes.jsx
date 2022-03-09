import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack, List, ListItem, ListIcon, SimpleGrid} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
// import { CheckIcon } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
// Faltam setas separadores

const Condicoes = () => {
    return (
<>
<Stack bgColor="#F0F3F6" w="100%" justify="center" pb={["10px","20px","30px","30px","50px"]} flexDirection={["column","column","column","column","row-reverse"]}>
    <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="flex-start">
        <AspectRatio w={["100%","100%","100%","100%","100%"]} ratio={[3, 3, 3, 3, 6/4]} >
            <Image objectPosition={["0 -50px","0 -100px","0 -200px","0 -200px", "0px"]} borderRadius={{xl: "70px 0 0 70px"}} src="/condicoes.jpg" alt="Condições" />
        </AspectRatio>
    </Flex>

    <Box alignSelf="center" pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
        <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto" >
            <Heading fontSize="52px" color="#1F0E59" mb="24px">
            Condições
            </Heading>
            <Text>
            Confira as condições para contratar o serviço:
            <List>
                <ListItem><ListIcon as={CheckIcon} color='#F2A03D' />
                Ser maior de 18 anos ou emancipado;</ListItem>
                
                <ListItem><ListIcon as={CheckIcon} color='#F2A03D' />
                Ter situação regular com a Receita Federal;</ListItem>
                
                <ListItem><ListIcon as={CheckIcon} color='#F2A03D' />
                Possuir conta corrente ou poupança;</ListItem>
               
                <ListItem><ListIcon as={CheckIcon} color='#F2A03D' />
                Ter saldo do FGTS em conta ativa ou inativa;</ListItem>
                
                <ListItem><ListIcon as={CheckIcon} color='#F2A03D' />
                Ser optante pela modalidade Saque-Aniversário do FGTS.</ListItem>
            </List>
            </Text>
        </Box>
    </Box>
</Stack>
</>
    )}
export default Condicoes