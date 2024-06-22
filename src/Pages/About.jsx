import { Box, Flex, Heading, Image, Text, useColorMode } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {VscStarEmpty} from "react-icons/vsc"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {BsFillStarFill} from "react-icons/bs"
import {FaGraduationCap} from "react-icons/fa"

const About = () => {
    const { colorMode } = useColorMode();

    const [colorBold,setColorBold]=useState("")
    const [secColor,setSecColor]=useState("")
    const [bg,setBg]=useState("")
    const [thirdColor,setThirdColor]=useState("")

    useEffect(()=>
  {
    colorMode==="dark"? setSecColor("#cdcdff"):setSecColor("#444444")
    colorMode==="dark"? setColorBold("#90a0d9"):setColorBold("#68d391")
    colorMode==="dark"? setBg("#1a202c") : setBg("white")
    colorMode==="dark"? setThirdColor("white"):setThirdColor("#444444")
   
  },[colorMode])


  return (
    <>
    <Box color={secColor} width={["95%","90%","90%","80%"]}  m="auto" id='about' pt="70px">
     <Heading textAlign={"center"} m="40px 0px">ABOUT <span style={{color:colorBold}}  >ME</span> </Heading>

     <Flex gap={"50px"} w={["100%","100%","100%","90%","60%"]}  flexDirection={["column","column","column","row"]} m="auto" justifyContent={"center"} alignItems="center" >
       <Box >
        <Image src='https://i.ibb.co/0syFjt3/PHOTO-2024-06-12-09-58-23.jpg' borderRadius={"16px"} width="300px"/>
       </Box>
       <Box >
        <Box w={["90%","400px"]} fontSize="17px" m={"auto"}>
         <Text>Hi, everyone I am samiksha Kantilal Dorage from Maharashtra, pune . I'm currently pursuing a diploma in artificial intelligence and machine learning from aissms polytechnic, pune .</Text>
         <br/>
         <Text>Some of my interests apart form Coding :</Text>
         <br/>
         <Box color={colorBold}>
         <Text display={"flex"} alignItems="center" gap={"5px"} fontSize="16px"><VscStarEmpty/>  Football</Text>
         <Text display={"flex"} alignItems="center" gap={"5px"} fontSize="16px"><VscStarEmpty/> Basketball</Text>
         <Text display={"flex"} alignItems="center" gap={"5px"} fontSize="16px"><VscStarEmpty/> Swimming</Text>
         <Text display={"flex"} alignItems="center" gap={"5px"} fontSize="16px"><VscStarEmpty/> Watching Movies</Text>
         </Box>
        </Box>
       </Box>
     </Flex>


     <Heading textAlign={"center"} m="40px 0px">MY  <span style={{color:colorBold}}  >EDUCATION</span> </Heading>


     <VerticalTimeline lineColor={thirdColor}>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{  color: secColor,boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",backgroundColor:bg}}
    contentArrowStyle={{ borderRight: '20px solid  rgb(33, 150, 243)' }}
    date="Sep 2022 - Present"
    iconStyle={{ background: bg, color: '#fff' }}
    icon={<FaGraduationCap color={thirdColor}/>}
  >
    
    <Heading textAlign={"center"} style={{color:colorBold}}  fontSize={["","",""]}> <Text></Text>All India shree shivaji memorial society polytechnic </Heading>
    
    <Text color={secColor}>
    Artificial intelligence and machine learning
    </Text>
  </VerticalTimelineElement>



  

</VerticalTimeline>






    </Box>
    </>
  )
}

export default About