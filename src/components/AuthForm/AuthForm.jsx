import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Box border={"1px solid gray"} borderRadius={4} padding={5}>
      <VStack spacing={4}>
        <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram" />

        <Input placeholder="Email" fontSize={14} type="email" />
        <Input placeholder="Password" fontSize={14} type="password" />

        {!isLogin ? (
          <Input placeholder="Confirm Password" fontSize={14} type="password" />
        ) : null}

        <Button
          w={"full"}
          colorScheme="blue"
          size={"sm"}
          fontSize={14}
          onClick={() => {}}
        >
          {isLogin ? "Log in" : "Sign Up"}
        </Button>

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
      </VStack>
    </Box>
  );
};

export default AuthForm;
