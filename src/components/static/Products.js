import { Box, Text, SimpleGrid, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAuth } from '../../contexts/AuthContext';
export default function Products() {
  const [selector, setproducts] = useState(useSelector(state => state.data));
  const { currentUser } = useAuth();

  function Delete(id) {
    const items = selector.filter(i => i.id !== id);
    console.log(items);
    setproducts(items);
  }

  return (
    <SimpleGrid pt="20px" spacing="10px" columns={[1, 2, 4, 4]}>
      {currentUser
        ? selector &&
          selector.data.map(data => (
            <Box
              mb="20px"
              p="10px"
              key={data.id}
              width="340px"
              border="1px solid black"
              shadow="md"
              borderRadius="10px"
              position="relative"
            >
             
              <Button  onClick={() => console.log('Edit: ' +data.id,data.customer_name, data.customer_email )} bottom="10px" right="10px" position="absolute">
                Edit
              </Button>
              <Button
                onClick={() => console.log('Delete: '+data.id,data.customer_name,data.customer_email)}
                bottom="60px"
                right="10px"
                position="absolute"
              >
                Delete
              </Button>
              <Box>
                <Text fontSize="20px" fontWeight="bold">
                  Name: {data.customer_name}
                </Text>
                <Text fontSize="15px">Email: {data.customer_email} </Text>
                <Text fontSize="15px"> Product: {data.product}</Text>
                <Text fontSize="15px">Quantity: {data.quantity}</Text>
              </Box>
            </Box>
          ))
        : 'none'}
    </SimpleGrid>
  );
}
