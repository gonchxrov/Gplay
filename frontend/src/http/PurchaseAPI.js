import { $hostAuth } from "./index";

export const createPurchase = async (purchase) => {
  const { data } = await $hostAuth.post("api/purchase", purchase);
  return data;
};

export const fetchPurchases = async (userId) => {
  const { data } = await $hostAuth.get(`api/purchase?userId=${userId}`);
  return data;
};
