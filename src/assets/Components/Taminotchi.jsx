import React, { useState, useEffect } from "react";
import {
    Box,
    Flex,
    Text,
    Heading,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Spinner,
    Divider,
    Link,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    useDisclosure,
    Accordion,
    AccordionPanel,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    Select,
} from "@chakra-ui/react";
import { BsFillTagFill } from "react-icons/bs";
import { FiShoppingCart, FiHome } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";

function Taminotchi() {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]); // Filterlangan tovarlar
    const [loading, setLoading] = useState(false);
    const [searchItem, setSearchItem] = useState(''); // Nomi bo'yicha qidiruv
    const [groupCode, setGroupCode] = useState(''); // Guruh kodi bo'yicha qidiruv
    const [valid, setValid] = useState(''); // Valid statusi bo'yicha qidiruv
    const { isOpen, onOpen, onClose } = useDisclosure();

    const yourToken = localStorage.getItem("accessToken");

    // Ma'lumotlarni olish uchun API chaqiruv
    const fetchItems = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                "https://ventum-internship-backend.bis-apps.com/api/supplier-items/pagination/0", {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${yourToken}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                if (response.status === 401) {
                    console.error('Ruxsat etilmagan kirish, iltimos, qayta kiring.');
                }
                throw new Error(`HTTP xatosi! status: ${response.status}`);
            }

            const data = await response.json();
            setItems(data.data); // Tovarlarni saqlash
            setFilteredItems(data.data); // Dastlabki ko'rinish uchun filtrlangan tovarlar
        } catch (error) {
            console.error("Tovarlarni olishda xato:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    // Filter funksiyasi
    useEffect(() => {
        const filterItems = () => {
            const filtered = items.filter(item =>
                (searchItem === '' || item.itemName.toLowerCase().includes(searchItem.toLowerCase())) &&
                (groupCode === '' || item.itemsGroupCode.toString().includes(groupCode)) && // toString() qo'shildi
                (valid === '' || item.valid === valid)
            );
            setFilteredItems(filtered);
        };

        filterItems();
    }, [searchItem, groupCode, valid, items]);


    return (
        <Flex w="100%" minH="100vh" bg="#f7fafc" fontFamily="sans-serif">
            <Box bg="white" w="25%" p={4} minH="100vh" boxShadow="lg" h="auto" >
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
                    Asosiy
                </Button>

                <hr />

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
                    onClick={fetchItems} // Bu yerda fetchItems chaqirilyapti
                >
                    <BsFillTagFill />
                    Tovarlar
                </Button>

                <Accordion defaultIndex={[0]} allowMultiple bg="white">
                    <AccordionItem w="100%" p="0px" spacing={4} color="#647196">
                        <h2>
                            <AccordionButton pl="0" pr="0" w="100%" display="flex" alignItems="center" justifyContent="space-between" gap={3} fontSize="lg">
                                <FiShoppingCart />
                                <Box as="span" flex="1" textAlign="left">
                                    Xaridlar
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel w="100%" pb={4} display="flex" flexDirection="column" gap="4">
                            <AccordionButton
                                align="center"
                                p={0}
                                _hover="none"
                                gap={1}
                                fontSize="17"
                            >
                                <FiShoppingCart />
                                <Text w="100%" ml={2} textAlign="left">
                                    Xarid buyurtmalari
                                </Text>
                            </AccordionButton>
                            <AccordionButton
                                align="center"
                                p={0}
                                _hover="none"
                                gap={1}
                                fontSize="17"
                            >
                                <FiShoppingCart />
                                <Text w="100%" ml={2} textAlign="left">
                                    Yetib kelganlari
                                </Text>
                            </AccordionButton>
                            <AccordionButton
                                align="center"
                                p={0}
                                _hover="none"
                                gap={1}
                                fontSize="17"
                            >
                                <FiShoppingCart />
                                <Text w="100%" ml={2} textAlign="left">
                                    Tekshiruvdagilar
                                </Text>
                            </AccordionButton>
                            <AccordionButton
                                align="center"
                                p={0}
                                _hover="none"
                                gap={1}
                                fontSize="17"
                            >
                                <FiShoppingCart />
                                <Text w="100%" ml={2} textAlign="left">
                                    Qabul qilinganlari
                                </Text>
                            </AccordionButton>
                            <AccordionButton
                                align="center"
                                p={0}
                                _hover="none"
                                gap={1}
                                fontSize="17"
                            >
                                <FiShoppingCart />
                                <Text w="100%" ml={2} textAlign="left">
                                    Tugallangan xaridlar
                                </Text>
                            </AccordionButton>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>

            {/* Asosiy content */}
            <Box w="75%" h="auto" p={4} bg="#f2f6ff">
                <Flex justify="space-between" mb={2} alignItems="center">
                    <Flex display="flex" flexDirection="column">
                        <Text fontSize="lg" color="gray.500">Ekran / Taminotchi</Text>
                        <Heading color="#1f2d3d">Taminotchi</Heading>
                    </Flex>
                    <Flex align="center" bg="white" p="3" borderRadius="50px" gap="3">
                        <Button bg="white" p={0}><TbWorld color="#647196" /></Button>
                        <Button bg="#090979" color="white" borderRadius="50%" p={1}>AP</Button>
                    </Flex>
                </Flex>

                <Box w="100%" bg="white" p={4} borderRadius="md" boxShadow="md">
                    <Box pb={3} display="flex" color="gray.500" justifyContent="space-between" alignItems="center">
                        <Box display="flex" gap={5}>
                            <Input fontSize={14} maxW="200px" h="30px" type="text" placeholder="nomi" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
                            <Input fontSize={14} maxW="200px" h="30px" type="text" placeholder="guruh kodi" value={groupCode} onChange={(e) => setGroupCode(e.target.value)} />
                            <Select fontSize={14} w="200px" h="30px" value={valid} onChange={(e) => setValid(e.target.value)}>
                                <option value="">Barchasi</option>
                                <option value="valid">Valid</option>
                                <option value="frozen">Frozen</option>
                            </Select>
                        </Box>
                        <Button fontSize={16} h="30px" colorScheme="blue" onClick={onOpen}>+</Button>
                    </Box>
                    {loading ? (
                        <Spinner />
                    ) : (
                        <Table variant="simple" w="100%">
                            <Thead p={0}>
                                <Tr>
                                    <Th  p={0} textAlign="center" fontSize="12px" fontWeight="bold" color="#3d3dfe">Tovar kodi</Th>
                                    <Th  p={0} textAlign="center" fontSize="12px" fontWeight="bold" color="#3d3dfe">Tovar nomi</Th>
                                    <Th  p={0} textAlign="center" fontSize="12px" fontWeight="bold" color="#3d3dfe">Kategoriya</Th>
                                    <Th  p={0} textAlign="center" fontSize="12px" fontWeight="bold" color="#3d3dfe">Tovar turi</Th>
                                    <Th  p={0} textAlign="center" fontSize="12px" fontWeight="bold" color="#3d3dfe">Guruh kodi</Th>
                                    <Th  p={0} textAlign="center" fontSize="12px" fontWeight="bold" color="#3d3dfe">Sotish bo'limi</Th>
                                    <Th  p={0} textAlign="center" fontSize="12px" fontWeight="bold" color="#3d3dfe">typeOfGoods</Th>
                                    <Th  p={0} textAlign="center" fontSize="12px" fontWeight="bold" color="#3d3dfe">Valid</Th>
                                </Tr>
                            </Thead>
                            <Tbody p={0}>
                                {filteredItems.map((item) => (
                                    <Tr textAlign="center" fontSize={10} key={item.itemCode}>
                                        <Td pt="1px" pb="1px" textAlign="center">{item.itemCode}</Td>
                                        <Td pt="1px" pb="1px" textAlign="center">{item.itemName}</Td>
                                        <Td pt="1px" pb="1px" textAlign="center">{item.category}</Td>
                                        <Td pt="1px" pb="1px" textAlign="center">{item.itemType}</Td>
                                        <Td pt="1px" pb="1px" textAlign="center">{item.itemsGroupCode}</Td>
                                        <Td pt="1px" pb="1px" textAlign="center">{item.salesUnit}</Td>
                                        <Td pt="1px" pb="1px" textAlign="center">{item.typeOfGoods}</Td>
                                        <Td pt="1px" pb="1px" textAlign="center">{item.valid}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    )}
                </Box>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Yangi tovar yaratish</ModalHeader>
                        <ModalBody>
                            <Input placeholder="Tovar kodi" mb={4} />
                            <Input placeholder="Guruh kodi" mb={4} />
                            <Input placeholder="Tovar nomi" mb={4} />
                            <Input placeholder="Tovar guruhi" mb={4} />
                            <Input placeholder="Tovar turi" mb={4} />
                            <Input placeholder="Sotib olish birligi" mb={4} />
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>
                                Saqlash
                            </Button>
                            <Button variant="ghost" onClick={onClose}>
                                Bekor qilish
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Flex>
    );
}

export default Taminotchi;
