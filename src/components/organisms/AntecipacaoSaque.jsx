import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack, List, ListItem, ListIcon, SimpleGrid} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
// import { CheckIcon } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
// Faltam setas separadores

const AntecipacaoSaque = () => {
    return (
<>
<Stack bgColor="#F0F3F6" w="100%" justify="center" pb={["10px","20px","30px","30px","50px"]} flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row-reverse"]}>

    <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
        <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
            <Heading fontSize="52px" color="#1F0E59" mb="24px">
            Antecipação do saque-aniversário
            </Heading>
            <Text>
            A antecipação do saque-aniversário é uma nova modalidade de crédito ao trabalhador que permite a antecipação do valor de até 3 parcelas de Saque-Aniversário do FGTS às quais o cliente tem direito de sacar anualmente no mês do seu aniversário.<br/><br/>
            A grande vantagem de contratar a Meu Crédito Liberado é a antecipação de até 10 parcelas, aumentando o valor a ser sacado e sem comprometer seu crédito.
            </Text>
        </Box>
    </Box>

    <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="flex-start">
        <AspectRatio w={["100%","100%","100%","100%","100%"]} ratio={[3, 3, 3, 3, 6/4]} >
            <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 70px 0"}} src="/antecipacao-saque-aniversario.jpg" alt="Antecipacao saque Aniversário" />
        </AspectRatio>
    </Flex>
</Stack>
</>
    )}
export default AntecipacaoSaque