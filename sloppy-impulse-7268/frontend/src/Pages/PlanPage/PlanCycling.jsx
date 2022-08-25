import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import PlanSidebar from './PlanSidebar'

function PlanCycling() {
    return (
        <div>
            <Flex w='75%' border='1px solid black' h='500px' m='auto' mt='50px'>
                <PlanSidebar />

                <Box w='85%' bg='white'> PlanCycling</Box>

            </Flex>

        </div>
    )
}

export default PlanCycling
