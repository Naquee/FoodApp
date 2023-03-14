import axios from 'axios'
import React from 'react'
import { SimpleGrid,Image ,Box,Text,Flex,Button} from '@chakra-ui/react'
// import {data} from "../componets/feed.json"
import { useState,useEffect } from 'react';
import { IconName } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useCart } from 'react-use-cart';
import AlertShow from '../componets/AlertShow';



const Menu = () => {
  const [data, setData] = useState([])
  const[cartdata,setCartdata] =useState([])
  const[show,setShow]=useState(false)

  const {addItem} =useCart()


//  addItem.alert("add")
function handleAlert(){
alert("Add to cart successful")
 
}


  const {count,setCount} =useContext(CartContext)
  // console.log("cart",cart)

  const fetchData =() => {
    axios.get("http://localhost:8080/data")
    .then((res) => {
      // console.log("data",res.data)
      setData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

 

  // const handleClick =(item)=> {
  //   alert("Add to cart")
  
  //  setCount(count+1)
  //   // console.log("item",item)
  //   fetch('http://localhost:8080/cart', {
  //     method: 'POST',
  //     body: JSON.stringify( item),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //      .then((response) => response.json())
  //      .then((data) => {
  //         console.log(data);
  //         // Handle data
  //      })
  //      .catch((err) => {
  //         console.log(err.message);
  //      });
   
  // }

  // console.log("cart",cart)

  useEffect(() => {
    fetchData();
    
  }, [])

 

    // console.log("data", data)
  return (
    <div>
      {/* <h1>Menu</h1> */}
      <SimpleGrid columns={[1,2,3]} spacing='40px' margin="auto" padding="50px">
        {
          data.map((item) => {
            return(
              <Box key={item.id} textAlign="start">
                <Image src={item.image}/>
                {/* <Image src='https://b.zmtcdn.com/data/pictures/chains/9/2600109/de57f90beda050df95b89bd239633e90_o2_featured_v2.jpg?output-format=webp'/> */}
                <Text>Name: {item.name}</Text>
                <Text>Price: {item.price}</Text>
                <Flex gap="30px">
                  <Box>
                  {/* <Button onClick={() => setCount(count+1)} colorScheme='blue'>+</Button> */}
                  </Box>
                  <Box>
                  {/* <Button disabled={count===0} onClick={handleReduce} set bg='#e0e0e0' color="balck">-</Button> */}
                  <Box onClick={handleAlert}><Button  onClick={() => addItem(item)}>Add To cart</Button></Box>
                  </Box>
                  
                </Flex>
              </Box>
            )
          })

        }
      </SimpleGrid>
      

      </div>
  )
}


export default Menu