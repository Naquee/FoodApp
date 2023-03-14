import React from 'react'

import {
    Alert,
    AlertIcon,
    Stack,
  } from '@chakra-ui/react'

const AlertShow = () => {
  return (
    <Stack spacing={3}>
  <Alert status='success' variant='solid'>
    <AlertIcon />
    Data uploaded to the server. Fire on!
  </Alert>
</Stack>
  )
}

export default AlertShow