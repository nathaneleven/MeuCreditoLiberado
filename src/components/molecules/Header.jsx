import React from "react";
import {
  chakra,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import LogoHeader from "../atoms/Logo";
import TelephoneHeader from '../atoms/TelephoneHeader'


export default function Gslr() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md" //consertar esse shadow
      >
        <Flex alignItems="center" maxW="1272px" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Meu Crédito Liberado Home Page"
              display="flex"
              alignItems="center"
            >
              <LogoHeader />
              <VisuallyHidden>Meu Crédito Liberado</VisuallyHidden>
            </chakra.a>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              display={{ base: "none", md: "inline-flex" }}
            >
            </HStack>
            <Button fontSize="20px" variant="ghost" size="md">
                <TelephoneHeader/>    
            </Button>
            
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}