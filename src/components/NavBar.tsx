import { Box, HStack, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import "./NavBar.scss";
import Data from "../assets/content.json";

const NavBar = () => {
  const NavBarItems = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Features",
      link: "features",
    },
    {
      name: "Portfolio",
      link: "portfolio",
    },
    {
      name: "Resume",
      link: "resume",
    },
    {
      name: "Projects",
      link: "projects",
    },
    {
      name: "Contact Me",
      link: "contact-me",
    },
  ];
  return (
    <>
      <HStack className="navbar">
        <Box className="title-icon">{Data.Name}</Box>
        <Box>
          <HStack className="right-panel">
            {NavBarItems.map((item) => (
              <Link
                className="link"
                as={ReactRouterLink}
                // to={item.link}
                key={item.name}
                id={item.link}
              >
                {item.name}
              </Link>
            ))}
          </HStack>
        </Box>
      </HStack>
    </>
  );
};

export default NavBar;
