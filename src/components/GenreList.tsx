import { List, ListItem, Image, HStack, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

function GenreList() {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner thickness="4px" size="lg" />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack spacing={5}>
            <Image
              src={genre.image_background}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
