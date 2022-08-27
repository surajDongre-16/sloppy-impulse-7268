import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from '../../components/Dashboard/Footer'
import Navbar from '../../components/Dashboard/Navbar'
import PlanSidebar from './PlanSidebar'

function PlanExericse() {
    return (
        <div>
               <Navbar />
            <Flex w='75%'  h='500px' m='auto' mt='50px'>
                <PlanSidebar />

                <Box w='85%' bg='white'>
                    <Text fontSize='50px' color='red'>All Static</Text>
                    <Text fontSize='50px'>PlanExericse</Text>
                </Box>

            </Flex>
            <Footer />


        </div>
    )
}

export default PlanExericse
