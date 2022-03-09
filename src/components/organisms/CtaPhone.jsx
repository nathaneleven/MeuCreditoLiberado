import React from 'react'
import { Flex, Box, Text, Spacer } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'

const CtaPhone = () => {
    return (
<>
<Box p="8" backgroundColor="#1F0E59" color="white" align="center"  >
        <Flex maxW="1272px" align="center" direction={{base: "column", md: "row"}} >
            <Box pb={{base:5, md:0}}>
                <Text fontWeight="bold" textAlign="start" fontSize="30px" >
                Ligue já para os nossos especialistas e conquiste sua independência financeira!
                </Text>
            </Box>
            <Spacer/>
            <Box pb={{base:5, md:0}}>
            <Button fontWeight="black" fontSize="25px" color="#1F0E59" colorScheme="whiteAlpha" bgColor="#F2A03D" px="40px" size="lg" variant="solid" >(11) 3333-9999</Button>
            </Box>
        </Flex>
</Box>
</>
    )}


export default CtaPhone