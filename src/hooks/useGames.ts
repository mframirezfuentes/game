import { GameQuery } from "../App";
import { Platform } from "../components/PlatformIconList";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
gameQuery:  GameQuery
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genre: gameQuery.genre?.id,
        platform: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
