
import {
    Box, Flex, Progress, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark, Text, Tooltip,

} from '@chakra-ui/react'
import React, { useState } from 'react'
import Footer from '../../components/Dashboard/Footer'
import Navbar from '../../components/Dashboard/Navbar'
import PlanSidebar from './PlanSidebar'
function PlanCarbs() {
    const [sliderValue, setSliderValue] = useState(45)


    return (
        <div>
            <Navbar />
            <Flex w='75%'  h='500px' m='auto' mt='50px'>
                <PlanSidebar />

                <Box w='85%' bg='white'>
                    <Text textAlign='left' pt='20px' pl='20px'>I plan to gain 9 lb in 124 days by eating more than <span style={{ color: "green", fontSize: "20px", fontWeight: "600" }}>2,170cals</span> daily.</Text>
                    <Box cursor='pointer' ml='-700px' mt='50px' >
                        <Tooltip label='Daily Carbs'>
                            Carbs 45%
                        </Tooltip>
                    </Box>
                    <br />
                    <Slider w='80%' mt='50px' aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>

                        <SliderMark
                            value={sliderValue}
                            textAlign='center'
                            bg='blue.500'
                            color='white'
                            mt='-10'
                            ml='-5'
                            w='12'
                        >
                            {sliderValue}%
                        </SliderMark>
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </Box>

            </Flex>

            <Footer />
        </div >
    )
}

export default PlanCarbs
