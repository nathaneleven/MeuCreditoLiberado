import React from 'react'
import { Flex, Box, Heading, Text, SimpleGrid } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

const BancosParceiros = () => {
    return (
        <>
        <Box py="10" borderBottom="solid 5px #1F0E59" w="100%" align="center"  backgroundColor="#F0F3F6">

            <Heading pb="20px" fontSize="45px" color="#1F0E59" as="h2">
                Bancos Parceiros
            </Heading>
            <Flex justifyContent="center" p={["4","5","6","7","8"]} w="100%" flexDirection={['column', 'column', 'row', 'row',"row"]} >
                <SimpleGrid justify-content="center" columns={{base:"1", md:"2"}} spacing={10} maxW="1250px">
                    <Box p="10" rounded="xl" boxShadow="2xl" border="solid 4px #F2A03D" >
                        <Image src="/logo-safra.svg"/>
                    </Box>

                    <Box p="10" rounded="xl" boxShadow="2xl" border="solid 4px #F2A03D" >
                    <Image src="/logo-c6bank.svg"/>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Box>
        </>
    )}

export default BancosParceiros