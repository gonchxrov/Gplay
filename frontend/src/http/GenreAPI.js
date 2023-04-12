import { $host } from "./index";

export const fetchGenres = async () => {
  const { data } = await $host.get("api/genre");
  return data;
};

export const fetchGenre = async (id) => {
  const { data } = await $host.get(`api/genre/${id}`);
  return data;
};
