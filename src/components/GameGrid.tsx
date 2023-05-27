import useGames from "../hooks/useGames";
import { Text } from "@chakra-ui/react";
import "./GamesGrid.css";

function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.name} {game.metacritic} {game.released.toString()}
          </li>
        ))}
      </ul>
      {error && <Text>{error}</Text>}
    </>
  );
}

export default GameGrid;
