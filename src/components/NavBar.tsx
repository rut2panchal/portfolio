import { Box, HStack, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between">
        <Box>Rutvik Panchal</Box>
        <Box>
          <HStack justifyContent="space-between">
            <Link as={ReactRouterLink} to="/home">
              Home
            </Link>
            <Link>Education</Link>
            <Link>Experience</Link>
            <Link>Contact Me</Link>
          </HStack>
        </Box>
      </HStack>
    </>
  );
};

export default NavBar;
