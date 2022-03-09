import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack, List, ListItem, ListIcon, SimpleGrid} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
// import { CheckIcon } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
// Faltam setas separadores

const Vantagens = () => {
    return (
<>
<Stack bgColor="#F0F3F6" w="100%" justify="center" pb={["10px","20px","30px","30px","0"]} flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row-reverse"]}>

    <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
        <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
            <Heading fontSize="52px" color="#1F0E59" mb="24px">
            Vantagens
            </Heading>
            <Text pb="10px">
            Com a Meu Crédito Liberado, você tem várias vantagens!
            </Text>

            <SimpleGrid fontSize="18px" columns={{base:"1", md:"3"}} spacing={10} maxW="1250px">
                <Box align="center" bgColor="#fff" p="5" rounded="xl">
                    <Box mb="10px" p="4" bgColor="#1F0E59" rounded="50%" h="70px" w="70px"><Image src='/icone-seguranca.svg' /></Box>
                    <Text>Segurança de um serviço respaldado por bancos consolidados no mercado como Safra e C6 Bank.</Text>
                </Box>

                <Box align="center" bgColor="#fff" p="5" rounded="xl">
                    <Box mb="10px" p="4" bgColor="#1F0E59" rounded="50%" h="70px" w="70px"><Image src='/icone-antecipacao.svg' /></Box>
                    <Text>Antecipação de até 10 parcelas do saldo total do FGTS.</Text>
                </Box>

                <Box align="center" bgColor="#fff" p="5" rounded="xl">
                    <Box mb="10px" p="4" bgColor="#1F0E59" rounded="50%" h="70px" w="70px"><Image src='/icone-whatsapp.svg' /></Box>
                    <Text>Atendimento rápido e prático via WhatsApp ou telefone.</Text>
                </Box>

            </SimpleGrid>
        </Box>
    </Box>

    <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="flex-start">
        <AspectRatio w={["100%","100%","100%","100%","100%"]} ratio={[3, 3, 3, 3, 6/4]} >
            <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 70px 0 0"}} src="/vantagens.jpg" alt="Vantagens" />
        </AspectRatio>
    </Flex>
</Stack>

</>
    )}
export default Vantagens