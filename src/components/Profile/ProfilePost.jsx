import { Flex, GridItem, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const ProfilePost = () => {
  return (
    <GridItem
      overflow={"hidden"}
      cursor={"pointer"}
      borderRadius={4}
      border={"1px solid"}
      borderColor={"whiteAlpha.300"}
      position={"relative"}
      aspectRatio={1 / 1}
    >
      <Flex
        opacity={0}
        _hover={{ opacity: 1 }}
        position={"absolute"}
        top={0}
        bottom={0}
        left={0}
        right={0}
        bg={"blackAlpha.700"}
        transition={"all 0.3s ease"}
        zIndex={1}
        justifyContent={"center"}
      >
        <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
          <Flex>
            <FaHeart size={20} />
            <Text fontWeight={"bold"} ml={2}>
              7
            </Text>
          </Flex>
          <Flex></Flex>
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default ProfilePost;
