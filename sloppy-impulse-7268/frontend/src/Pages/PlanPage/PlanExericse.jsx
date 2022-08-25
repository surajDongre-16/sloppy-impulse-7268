import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import PlanSidebar from './PlanSidebar'

function PlanExericse() {
    return (
        <div>
            <Flex w='75%' border='1px solid black' h='500px' m='auto' mt='50px'>
                <PlanSidebar />

                <Box w='85%' bg='white'>
                    <Text fontSize='50px' color='red'>All Static</Text>
                    <Text fontSize='50px'>PlanExericse</Text>
                </Box>

            </Flex>

        </div>
    )
}

export default PlanExericse
