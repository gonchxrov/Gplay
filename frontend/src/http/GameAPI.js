import { $host, $hostAuth } from "./index";

export const createGame = async (game) => {
  const { data } = await $hostAuth.post("api/type", game);
  return data;
};

export const fetchGames = async () => {
  const { data } = await $host.get("api/game");
  return data;
};

export const fetchOneGame = async (id) => {
  const { data } = await $host.get(`api/game/${id}`);
  return data;
};
