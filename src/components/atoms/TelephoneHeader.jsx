import { Box, Link } from '@chakra-ui/layout'
import { PhoneIcon } from '@chakra-ui/icons'
import React from 'react'

const TelephoneHeader = () => {
  return (
    <>
    <Box display="flex" alignItems="center">
      <Box margin="5px" fontWeight="bold">
      <PhoneIcon color="#F2A03D" mr="5px" /><Link textDecor="none !important" href="tel:+1133339999" >
      1.833.730.0303</Link>
      </Box>
    </Box>
    </>
  )
}

export default TelephoneHeader
