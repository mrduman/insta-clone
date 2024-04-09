import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex alignItems={"center"} w={"full"} justifyContent={"space-between"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src="/profilepic.png" size={"lg"} name="programmer" />
        <Text fontSize={12} fontWeight={"bold"}>
          programmer
        </Text>
      </Flex>

      <Link
        fontSize={14}
        color={"blue.400"}
        fontWeight={"medium"}
        cursor={"pointer"}
        bg={"transparent"}
        _hover={{ color: "white" }}
        as={RouterLink}
        to={"/auth"}
      >
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
