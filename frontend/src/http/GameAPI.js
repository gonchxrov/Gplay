import { $host, $hostAuth } from "./index";

export const createGame = async (game) => {
  const { data } = await $hostAuth.post("api/type", game);
  return data;
};

export const fetchGames = async () => {
  const { data } = await $host.get("api/game");
  return data;
};

export const fetchGamesByPage = async (page) => {
  const { data } = await $host.get(`api/game?page=${page}`);
  return data;
};

export const fetchCountOfGames = async () => {
  const { data } = await $host.get("api/game?count=1");
  return data;
};

export const fetchOneGame = async (id) => {
  const { data } = await $host.get(`api/game/${id}`);
  return data;
};
