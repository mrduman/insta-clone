import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />

          {isLogin ? <Login /> : <Signup />}

          {/** ---------- OR ----------- */}
          <Flex
            w={"full"}
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
          >
            <Box bg={"gray.400"} flex={2} h={"1px"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box bg={"gray.400"} flex={2} h={"1px"} />
          </Flex>

          <GoogleAuth />
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            cursor={"pointer"}
            color={"blue.500"}
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
