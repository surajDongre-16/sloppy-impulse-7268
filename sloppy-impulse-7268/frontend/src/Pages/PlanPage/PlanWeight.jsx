import { Box, Flex, Input, Text } from '@chakra-ui/react'
import React from 'react'
import PlanSidebar from './PlanSidebar'

function PlanWeight() {
    return (
        <div>
            <Flex w='75%' border='1px solid black' h='500px' m='auto' mt='50px'>
                <PlanSidebar />

                <div w='85%' bg='white'  >


                    <Text textAlign='left' pt='20px' pl='20px'>I plan to gain 9 lb in 124 days by eating more than <span style={{ color: "green", fontSize: "20px", fontWeight: "600" }}>2,170cals</span> daily.</Text>


                    <p style={{ textAlign: "left", marginLeft: '20px', marginTop: '20px', color: "grey", fontSize: '12px' }}>Current Weight</p>
                    <Input float='left' ml='20px' type='text' w='300px' variant='flushed' value='71lbs' />
                    <br />
                    <p style={{ textAlign: "left", marginLeft: '20px', marginTop: '30px', color: "grey", fontSize: '12px' }}>Target Weight</p>
                    <Input float='left' ml='20px' type='text' w='300px' variant='flushed' value='80lbs' />

                    <br />
                    <p style={{ textAlign: "left", marginLeft: '20px', marginTop: '30px', color: "grey", fontSize: '12px' }}>Weekly Rate</p>
                    <Input float='left' ml='20px' type='text' w='300px' variant='flushed' value='Dec 27, 2022' />

                    <br />
                    <p style={{ textAlign: "left", marginLeft: '20px', marginTop: '30px', color: "grey", fontSize: '12px' }}></p>
                    <Input float='left' ml='20px' type='text' w='300px' variant='flushed' placeholder='Minimum calorie Budget' />



                    <br />
                    <p style={{ textAlign: "left", marginLeft: '20px', marginTop: '30px', color: "grey", fontSize: '12px' }}>AutoPolit</p>
                    <Input float='left' ml='20px' type='text' w='300px' variant='flushed' value='Off' />
                </div>

            </Flex>

        </div >
    )
}

export default PlanWeight
