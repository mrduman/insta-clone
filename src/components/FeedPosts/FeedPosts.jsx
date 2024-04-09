import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} alignItems={"flex-start"} gap={2} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton width={"200px"} height="10px" />
                <Skeleton width={"200px"} height="10px" />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box height={"500px"} />
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <FeedPost
            img="/img1.png"
            username="Emily Jackson"
            avatar="/img1.png"
          />
          <FeedPost
            img="/img2.png"
            username="Alex De Souza"
            avatar="/img2.png"
          />
          <FeedPost img="/img3.png" username="Elena Gomez" avatar="/img3.png" />
          <FeedPost img="/img4.png" username="Ali Günes" avatar="/img4.png" />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
