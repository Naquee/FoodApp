import React from 'react'
import { Button ,Box} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Box width="40%" margin="auto" fontWeight="light" fontSize="60px">Welcome to food's Kitchen</Box>
      <br />
  <Link style={{texDecoration:"none"}} to="menu"><Button borderRadius="5px" height="30px" background='#3f51b5' color="white">   GO TO MENUE</Button></Link>
    </div>
  )
}

export default Home
