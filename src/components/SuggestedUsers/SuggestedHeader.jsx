import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  if (!authUser) return null;

  return (
    <Flex alignItems={"center"} w={"full"} justifyContent={"space-between"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`${authUser.username}`}>
          <Avatar src={authUser.profilePicURL} size={"lg"} />
        </Link>

        <Link to={`${authUser.username}`}>
          <Text fontSize={12} fontWeight={"bold"}>
            {authUser.username}
          </Text>
        </Link>
      </Flex>

      <Button
        size={"xs"}
        background={"transparent"}
        _hover={{ bg: "transparent" }}
        fontSize={14}
        color={"blue.400"}
        fontWeight={"medium"}
        cursor={"pointer"}
        onClick={handleLogout}
        isLoading={isLoggingOut}
      >
        Log out
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
