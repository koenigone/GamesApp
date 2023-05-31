import {
  List,
  ListItem,
  Image,
  HStack,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner thickness="4px" size="lg" />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="7px">
          <HStack spacing={5}>
            <Image
              src={genre.image_background}
              boxSize="33px"
              borderRadius={8}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="sm"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
