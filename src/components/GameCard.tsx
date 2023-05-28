import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import {
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  CardFooter,
} from "@chakra-ui/react";
import "./GameCard.css";

interface Prorps {
  game: Games;
}

function GameCard({ game }: Prorps) {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </CardBody>
        <CardFooter justifyContent={"space-between"}>
          <Text colorScheme="">{game.released}</Text>
          {/* <Text className="metacritic">{game.metacritic}</Text> */}
          <CriticScore score={game.metacritic} />
        </CardFooter>
      </Card>
    </>
  );
}

export default GameCard;
