import { Flex,Box,Button,Text,Heading, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Image } from '@chakra-ui/react'
import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useCart } from 'react-use-cart';
import { CartContext } from '../context/CartContext';


const Cart = () => {
    // const {count,setCount,} =useContext(CartContext)
    
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        emptyCart
      } = useCart();

      if(isEmpty){
        return <h1>Your cart is Empty</h1>
      }
   
    // const [totalCartPrice, setTotalCartPrice] = useState("");
    // let totaItem=cart.length;
    // console.log("item",totaItem)




// function fetchData(){
//     // setTotalCartPrice("")
//     setCart([])
//     axios.get("http://localhost:8080/cart")

//     .then((res) => {
//         console.log("cart1", res.data.price)
//         setCart(res.data)
     
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }

// var priceArr=[];
// let priceCart = cart.price.reduce((a,b) => a+b,0)
// console.log(priceCart)


// const handleDelete =(id) => {
//     fetch(`http://localhost:8080/cart/${id}`, { method: 'DELETE' })
//         .then(() => alert('Delete successful'));
//         window.location.reload();

// }

// useEffect(() => {
//     fetchData()   
// },[])

// console.log("cart", cart)



  return (
    <>
     <TableContainer>
    <Text ml={10}  fontSize="20px" fontWeight="bold">Total Item is <span style={{color:"red" , fontSize:"30px"}}>{totalUniqueItems}</span> </Text>
  <Table variant='simple' gap="10px">
  
  
    <Thead>
      <Tr>
        <Th>Products Image</Th>
        <Th>Product Name</Th>
        <Th>Product Price</Th>
        <Th>Total Price</Th>
        <Th>quentity</Th>
       
      </Tr>
    </Thead>
    <Tbody>
    {
        items?.map((item) => {
            return(
         <Tr>
         <Td><Image src={item.image} width="100px"/></Td>
         <Td>{item.name}</Td>
         <Td>{item.price}</Td>
         <Td>{item.price*item.quantity}</Td>
         <Td>quentity({item.quantity})</Td>
         <Td>
         <Flex gap="10px">
            <Box>
            <Button
            colorScheme='teal'
            onClick={() => updateItemQuantity(item.id, item.quantity+1)} 
            >+</Button>
            </Box>

            <Box>
            <Button
            colorScheme='teal'
            onClick={() => updateItemQuantity(item.id, item.quantity-1)} 
            >-</Button>
            </Box>

            <Box>
            <Button
            colorScheme='red'
            onClick={() => removeItem(item.id)}
            >Remove Item</Button>

            </Box>
         </Flex>
          
         </Td>
      </Tr>
            )

        })
    }
   
    </Tbody>
  
  </Table>
</TableContainer>
<Box border="1px solid red" width="100%" display="flex" justifyContent="right" pr={10} gap="50px">
<Box ><Text fontSize="20px" fontFamily="900">Total Price : ₹ {cartTotal} </Text></Box>
<Box display="flex" rowGap="20px">
<Button colorScheme='red'  onClick={()=> emptyCart()}>Clear Cart</Button>
</Box>
<Box>
<Button colorScheme='teal'>Checkout</Button>
</Box>

</Box>
</>

  )
}

export default Cart