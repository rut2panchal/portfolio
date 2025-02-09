import "./Home.scss";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Flex className="home">
        <Box className="left-panel">
          <Text mb={20}>Welcome to my world</Text>
          <Heading className="header" as="h1" m={0}>
            Hi, I'm <span className="name">Rutvik Panchal</span>
          </Heading>
          <Heading as="h1" className="secondary-header" mt={10}>
            <span>a </span>

            <span>Full-Stack Developer</span>
          </Heading>
        </Box>
        <Box className="right-panel">right panel</Box>
      </Flex>
    </>
  );
};

export default Home;
