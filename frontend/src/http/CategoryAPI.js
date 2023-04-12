import { $host } from "./index";

export const fetchCategories = async () => {
  const { data } = await $host.get("api/category");
  return data;
};

export const fetchCategory = async (id) => {
  const { data } = await $host.get(`api/category/${id}`);
  return data;
};
