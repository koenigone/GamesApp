import { Switch, HStack, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack padding="20px">
      <Switch
        id="email-alerts"
        isChecked={colorMode === "light"}
        onChange={toggleColorMode}
      />
      <Text fontSize="15px">Light / Dark</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
