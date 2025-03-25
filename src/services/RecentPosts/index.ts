import envConfig from "@/src/config/config";
import delay from "@/src/utils/delay";

export const getRecentPosts = async () => {
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`
  );
  await delay(5000);
  return await res.json();
};
