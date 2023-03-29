import { $hostAuth } from "./index";

export const fetchPurchases = async (userId) => {
  const { data } = await $hostAuth.get(`api/purchase?userId=${userId}`);
  return data;
};
