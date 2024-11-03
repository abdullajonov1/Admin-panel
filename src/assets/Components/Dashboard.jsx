import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  IconButton,
  Avatar,
  Stack,
  Divider,
  Link,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { FaTruck } from "react-icons/fa";
import { PiCalculatorLight } from "react-icons/pi";
import { HiCurrencyDollar } from "react-icons/hi2";
import { MdGroups } from "react-icons/md";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { BsFillTagFill } from "react-icons/bs";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FiHome, FiShoppingCart, FiDollarSign } from "react-icons/fi";
import { BsBarChart } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { FaFileCircleCheck } from "react-icons/fa6";

function Dashboard() {
  return (
    <Flex minH="100vh" bg="#f7fafc" fontFamily="sans-serif">
      {/* Chap panel */}
      <Box
        bg="white"
        w="25%"
        p={4}
        minH="100vh"
        boxShadow="lg"
        maxH="600px"
        overflowY="scroll"
      >
        <Text fontSize="3xl" textAlign="center" fontWeight="bold" color="#4a3aff" mb={6} mt={6}>
          Pro Tools
        </Text>
        <Button
          bg="white"
          _hover="none"
          spacing={4}
          color="#647196"
          fontWeight="100"
          textAlign="left"
          justifyContent="left"
          alignItems="center"
          gap="3"
          w="100%"
          p={0}
          fontSize="lg"
        >
          <FiHome />
          Home
        </Button>

        <Accordion defaultIndex={[0]} allowMultiple bg="white">
          <AccordionItem w="100%" p="0px" spacing={4} color="#647196">
            <h2>
              <AccordionButton pl="0" pr="0" w="100%" display="flex" alignItems="center" justifyContent="space-between" gap={3} fontSize="lg">
                <FiShoppingCart />
                <Box as='span' flex='1' textAlign='left'>

                  Sotuv
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} display="flex" flexDirection="column" gap="4" textAlign="left" fontSize="17">
              <AccordionButton align="center" p={0} _hover="none" gap={1}>
                <FiShoppingCart />
                <Text w="100%" ml={2} fontSize="lg" textAlign="left">
                  Buyurtmalar
                </Text>
              </AccordionButton>
              <AccordionButton align="center" p={0} _hover="none" gap={1}>
                <FiShoppingCart />
                <Text w="100%" ml={2} fontSize="lg" textAlign="left">
                  Telegram buyurtma
                </Text>
              </AccordionButton>
              <AccordionButton align="center" p={0} _hover="none" gap={1}>
                <FiShoppingCart />
                <Text w="100%" ml={2} fontSize="lg" textAlign="left">
                  Sotuv
                </Text>
              </AccordionButton>
              <AccordionButton alignItems="center" p={0} _hover="none" gap={1}>
                <FiShoppingCart />
                <Text w="100%" ml={2} fontSize="lg" textAlign="left">
                  Bekor qilingan savdolar
                </Text>
              </AccordionButton>
              <AccordionButton align="center" p={0} _hover="none" gap={1}>
                <FiShoppingCart />
                <Text w="100%" ml={2} fontSize="lg" textAlign="left">
                  Savdo hisobotlari
                </Text>
              </AccordionButton>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem w="100%" p="0px" spacing={4} color="#647196">
            <h2>
              <AccordionButton pl="0" pr="0" w="100%" display="flex" alignItems="center" justifyContent="space-between" gap={3} fontSize="lg">
                <BsFillTagFill />
                <Box as='span' flex='1' textAlign='left'>
                  Xarid
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel w="100%" pb={4} display="flex" flexDirection="column" gap="4" textAlign="left">
              <AccordionButton align="center" p={0} _hover="none" gap={1} fontSize="17">
                <BsFillTagFill />
                <Text w="100%" ml={2} textAlign="left">
                  Xarid
                </Text>
              </AccordionButton>
              <AccordionButton align="center" p={0} _hover="none" gap={1} fontSize="17">
                <BsFillTagFill />
                <Text w="100%" ml={2} textAlign="left">
                  Bekor qilingan xaridlar
                </Text>
              </AccordionButton>
              <AccordionButton align="center" p={0} _hover="none" gap={1} fontSize="17">
                <BsFillTagFill />
                <Text w="100%" ml={2} textAlign="left">
                  Xarid hisobotlari
                </Text>
              </AccordionButton>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem w="100%" p="0px" spacing={4} color="#647196">
            <h2>
              <AccordionButton pl="0" pr="0" w="100%" display="flex" alignItems="center" justifyContent="space-between" gap={3} fontSize="lg">
                <FaMoneyCheckDollar />
                <Box as='span' flex='1' textAlign='left'>
                  To'lov
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} display="flex" flexDirection="column" gap="4" textAlign="left" fontSize="17">
              <AccordionButton align="center" p={0} _hover="none">
                <FaMoneyCheckDollar />
                <Text w="100%" ml={2} fontSize="lg" textAlign="left">
                  Входящий платеж
                </Text>
              </AccordionButton>
              <AccordionButton align="center" p={0} _hover="none">
                <FaMoneyCheckDollar />
                <Text w="100%" ml={2} fontSize="lg" textAlign="left">
                  Исходящий платеж
                </Text>
              </AccordionButton>
              <AccordionButton align="center" p={0} _hover="none" >
                <FaMoneyCheckDollar />
                <Text w="100%" ml={2} fontSize="lg" textAlign="left">
                  Телеграм платеж
                </Text>
              </AccordionButton>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Button w="100%" bg="white" _hover="none" spacing={4} color="#647196" fontWeight="100" textAlign="left" justifyContent="left" alignItems="center" gap="3" p={0} fontSize="lg">
          <MdGroups />
          Склад
        </Button>
        <Button w="100%" bg="white" _hover="none" spacing={4} color="#647196" fontWeight="100" textAlign="left" justifyContent="left" alignItems="center" gap="3" p={0} fontSize="lg">
          <HiCurrencyDollar />
          Kurs
        </Button>
        <Button w="100%" bg="white" _hover="none" spacing={4} color="#647196" fontWeight="100" textAlign="left" justifyContent="left" alignItems="center" gap="3" p={0} fontSize="lg">
          <PiCalculatorLight />
          Kassa
        </Button>
        <Button w="100%" bg="white" _hover="none" spacing={4} color="#647196" fontWeight="100" textAlign="left" justifyContent="left" alignItems="center" gap="3" p={0} fontSize="lg">
          <MdGroups />
          Mijozlar ro'yxati
        </Button>

        <Accordion defaultIndex={[0]} allowMultiple bg="white">
          <AccordionItem w="100%" p="0px" spacing={4} color="#647196">
            <h2>
              <AccordionButton pl="0" pr="0" w="100%" display="flex" alignItems="center" justifyContent="space-between" gap={3} fontSize="lg">
                <FaTruck />
                <Box as='span' flex='1' textAlign='left'>
                  Tovar ko'chirish
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} display="flex" flexDirection="column" gap="4" textAlign="left" fontSize="17">
              <AccordionButton align="center" p={0} _hover="none" gap={1}>
                <FaTruck />
                <Text w="100%" ml={2} fontSize="lg" textAlign="left">
                  Buyurtmalar
                </Text>
              </AccordionButton>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>

      {/* Asosiy content */}
      <Box w="82%" p={6} bg="#f2f6ff">
        <Flex justify="space-between" mb={6} alignItems="center">
          <Flex display="flex" flexDirection="column">
            <Text fontSize="lg" color="gray.500" alignItems="center">
              Ekran / Asosiy
            </Text>
            <Heading color="#1f2d3d">Asosiy</Heading>
          </Flex>
          <Flex align="center" bg="white" p="3" borderRadius="50px" gap="3">
            <Button className="language" bg="white" p={0} _hover="none" _active="none">
              <TbWorld color="#647196" />
            </Button>
            <IoSunnyOutline color="#647196" />
            <IoMoonOutline color="#647196" />
            <Button bg="#090979" color="white" borderRadius="50%" p={1} _hover="none">
              AP
            </Button>
          </Flex>
        </Flex>

        {/* Kartalar qismi */}
        <Flex wrap="wrap" gap={6}>
          <Box
            w="30%"
            p={4}
            bg="white"
            borderRadius="35px"
            display="flex"
            alignItems="center"
            gap={5}
          >
            <BsBarChart size="25px" color="#4a3aff" />
            <Box>
              <Text fontSize="md" fontWeight="normal" color="#647196">
                Earnings
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="#1f2d3d">$350.4</Text>
            </Box>
          </Box>

          <Box
            w="30%"
            p={4}
            bg="white"
            borderRadius="35px"
            display="flex"
            alignItems="center"
            gap="5"
          >
            <FiDollarSign size="25px" color="#4a3aff" />
            <Box>
              <Text fontSize="md" fontWeight="normal" color="#647196">
                Spend this month
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="#1f2d3d">$642.39</Text>
            </Box>
          </Box>

          <Box
            w="30%"
            p={4}
            bg="white"
            borderRadius="35px"
            display="flex"
            alignItems="center"
            gap="5"
          >
            <FaFileCircleCheck size="25px" color="#4a3aff"/>
            <Box>
              <Text fontSize="md" fontWeight="normal" color="#647196">
                New Tasks
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="#1f2d3d">154</Text>
            </Box>
          </Box>

          <Box
            w="30%"
            p={4}
            bg="white"
            borderRadius="35px"
            display="flex"
            alignItems="center"
            gap={5}
          >
            <BsBarChart size="25px" color="#4a3aff" />
            <Box>
              <Text fontSize="md" fontWeight="normal" color="#647196">
                Earnings
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="#1f2d3d">$350.4</Text>
            </Box>
          </Box>

          <Box
            w="30%"
            p={4}
            bg="white"
            borderRadius="35px"
            display="flex"
            alignItems="center"
            gap="5"
          >
            <FiDollarSign size="25px" color="#4a3aff" />
            <Box>
              <Text fontSize="md" fontWeight="normal" color="#647196">
                Spend this month
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="#1f2d3d">$642.39</Text>
            </Box>
          </Box>

          <Box
            w="30%"
            p={4}
            bg="white"
            borderRadius="35px"
            display="flex"
            alignItems="center"
            gap="5"
          >
            <FaFileCircleCheck size="25px" color="#4a3aff"/>
            <Box>
              <Text fontSize="md" fontWeight="normal" color="#647196">
                New Tasks
              </Text>
              <Text fontSize="2xl" fontWeight="bold" color="#1f2d3d">154</Text>
            </Box>
          </Box>
        </Flex>

        {/* Footer */}
        <Divider my={6} mt={60}/>
        <Text fontSize="sm" color="#647196" display="flex" alignItems="center" justifyContent="space-between">
          © 2024 BIS kompaniyasi tomonidan yaratildi
          <Link color="#4a3aff">Biz haqimizda</Link>
        </Text>
      </Box>
    </Flex>
  );
}

export default Dashboard;
