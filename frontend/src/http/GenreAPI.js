import { $host } from "./index";

export const fetchGenres = async () => {
  const { data } = await $host.get("api/genre");
  return data;
};
