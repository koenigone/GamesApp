import { Switch, HStack, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  const colorSwitch = colorMode === "light" ? "Dark theme" : "Light theme";
  return (
    <HStack padding="20px">
      <Text fontSize="14px">{colorSwitch}</Text>
      <Switch
        id="email-alerts"
        isChecked={colorMode === "light"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
}

export default ColorModeSwitch;
