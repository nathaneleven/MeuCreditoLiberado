import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack, List, ListItem, ListIcon, SimpleGrid} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
// import { CheckIcon } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
// Faltam setas separadores

const SobreMCL = () => {
    return (
<>
<Stack bgColor="#fff" borderBottom="solid 5px #1F0E59" w="100%" justify="center" pb={["10px","20px","30px","30px","50px"]} flexDirection={["column","column","column","column","row-reverse"]}>
    <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="flex-start">
        <AspectRatio w={["100%","100%","100%","100%","100%"]} ratio={[3, 3, 3, 3, 6/4]} >
            <Image objectPosition={["0 -50px","0 -100px","0 -200px","0 -200px", "0px"]} borderRadius={{xl: "0 0 0 70px"}} src="/sobre-meu-credito-liberado.jpg" alt="Condições" />
        </AspectRatio>
    </Flex>

    <Box alignSelf="center" pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
        <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto" >
            <Heading fontSize="52px" color="#1F0E59" mb="24px">
            Sobre a <br/><Box as="span" color="#F2A03D">Meu Crédito Liberado</Box>
            </Heading>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula faucibus sapien vitae vehicula. Mauris a lectus erat. Phasellus nec velit vitae quam porta ultrices. Nam augue velit, vehicula a nulla non, facilisis congue arcu. Sed tincidunt pellentesque pulvinar.<br/><br/>

Nullam dapibus enim ullamcorper hendrerit aliquam. Maecenas non lacinia justo. Suspendisse lobortis, ligula et consectetur viverra, arcu tellus cursus mi, vitae sollicitudin justo libero ut nunc.
            </Text>
        </Box>
    </Box>
</Stack>
</>
    )}
export default SobreMCL