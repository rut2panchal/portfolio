import "./Home.scss";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Data from "../assets/content.json";

const Home = () => {
  return (
    <>
      <Flex className="home">
        <Box className="left-panel">
          <Image
            className="profile-image"
            src="/profile-nobg.png"
            alt={Data.Name}
            height={600}
          />
        </Box>
        <Box className="right-panel">
          <Text className="welcome-text" mb={20}>
            {Data.WelcomeText}
          </Text>
          <Heading className="header" as="h1" m={0}>
            {Data.Greetings} <span className="name">{Data.Name}</span>
          </Heading>
          <Heading className="secondary-header" as="h1" mt={10}>
            {Data.Role}
          </Heading>
          <Text className="description" mt={10}>
            {Data.Description}
          </Text>
          <Box className="skills">
            <Heading className="skills-header" as="h2" mt={20}>
              {Data.SkillsHeader}
            </Heading>
            {/* <Text className="skills-description">{Data.SkillsDescription}</Text> */}
            <Flex className="skills-list">
              {Data.Skills.map((skill, index) => (
                <Box key={index} className="skill">
                  <span>{skill}</span>
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
