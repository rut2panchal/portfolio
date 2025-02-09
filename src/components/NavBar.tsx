import { Box, HStack, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  const NavBarItems = [
    {
      name: "HOME",
      link: "home",
    },
    {
      name: "FEATURES",
      link: "features",
    },
    {
      name: "PORTFOLIO",
      link: "portfolio",
    },
    {
      name: "RESUME",
      link: "resume",
    },
    {
      name: "PROJECTS",
      link: "projects",
    },
    {
      name: "CONTACTS",
      link: "contacts",
    },
  ];
  return (
    <>
      <HStack className="navbar">
        <Box>Rutvik Panchal</Box>
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
