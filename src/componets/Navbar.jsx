import React from 'react';
import { Box, Flex,Image } from '@chakra-ui/react';
import restaurant_24px  from "../assets/restaurant_48px.svg"
import { FaCartPlus } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
const Navbar = () => {
    const {
        totalUniqueItems,
      
      } = useCart();
    const {count}= useContext(CartContext);
  return (
    <Flex border="1px solid red" width="100%" bg="#3f51b5" padding="10px"  color="white" justifyContent="space-between">
        <Box >
            <Flex gap="20px">
                <Box color="white">

                    <Image bg="white" src={restaurant_24px} width="30px"/>

                </Box>
                <Box>
                    Food's Restaurants

                </Box>
            </Flex>
        </Box>
        <Box fontSize="30px" display="flex" justifyContent="space-evenly">
            <Link to="/cart">
                <Flex>
                <Box>
                <FaCartPlus/>
                </Box>
                <Box>{totalUniqueItems}</Box>
                </Flex>
                </Link>
        </Box>
    </Flex>
  )
}

export default Navbar