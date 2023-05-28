import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import "./GamesGrid.css";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={10} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
      {error && <Text>{error}</Text>}
    </>
  );
}

export default GameGrid;
