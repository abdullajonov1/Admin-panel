import React, { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setShowPassword(!showPassword);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    try {
      const request = await fetch("https://ventum-internship-backend.bis-apps.com/api/accounts/log-in", 
        {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: loginValue,
          password: passwordValue,
          deviceId: "string1",
          token: "string",
          language: "uz",
        }),
      });

      if (!request.ok) {
        const error = await request.json();
        console.log(error);
        showToast({
          title: "Xatolik",
          description: "Login yoki Parol noto'g'ri",
          status: "error",
          position: "top",
        });
        return;
      }

      const response = await request.json();
      console.log(response.data);
      localStorage.setItem("accessToken", response.data.token);

      navigate("/taminotchi");

    } catch (error) {
      console.log(error);
      showToast({
        title: "Xatolik",
        description: "Login yoki Parol noto'g'ri",
        status: "error",
        position: "top",
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Flex w={{ base: "full", md: "50%" }} align="center" justify="center" p={8}>
        <Box bg="white" p={8} rounded="lg" w={{ base: "full", md: "100%" }} maxW="400px">
          <Heading as="h2" size="xl" mb={4} textAlign="left">
            Kirish
          </Heading>
          <Text mb={6} fontSize="14px" color="gray.600">
            Kirish uchun login va parolni kiriting!
          </Text>

          <form onSubmit={handleLoginSubmit}>
            <FormControl id="login" isRequired mb={6}>
              <FormLabel>Login</FormLabel>
              <Input
                bg={"white"}
                p={5}
                borderRadius={15}
                type="text"
                placeholder="login"
                fontFamily={"sans-serif"}
                value={loginValue}
                onChange={(e) => setLoginValue(e.target.value)}
              />
            </FormControl>

            <FormControl id="password" isRequired mb={6}>
              <FormLabel>Parol</FormLabel>
              <InputGroup>
                <Input
                  bg={"white"}
                  p={5}
                  fontFamily={"sans-serif"}
                  borderRadius={15}
                  type={showPassword ? "text" : "password"}
                  placeholder="****"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                />
                <InputRightElement>
                  <Button variant={"ghost"} onClick={handleClick} p="0" borderRadius="15">
                    {showPassword ? <IoEyeOffOutline /> : <MdOutlineRemoveRedEye />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              width="full"
              mt={4}
              isLoading={isPending}
            >
              Kirish
            </Button>
          </form>
        </Box>
      </Flex>

      <Flex
        display={{ base: "none", md: "flex" }}
        w={{ base: "none", md: "50%" }}
        bg="blue.500"
        align="center"
        justify="center"
        color="white"
        minH="100vh"
        borderBottomLeftRadius="30%"
      >
        <Text fontSize="6xl" fontWeight="bold">
          Pro Tools
        </Text>
      </Flex>
    </Flex>
  );
}

export default LoginForm;
