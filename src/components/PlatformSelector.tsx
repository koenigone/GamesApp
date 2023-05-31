import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

function PlatfromSelector() {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <HStack margin='0px 20px'>
      <Menu>
        <MenuButton as={Button} rightIcon={BsChevronBarDown}>
          Platforms
        </MenuButton>
        <MenuList>
          {data.map((item) => (
            <MenuItem key={item.id}>{item.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </HStack>
  );
}

export default PlatfromSelector;
