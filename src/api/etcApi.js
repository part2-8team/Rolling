import { BASE_URL } from "./requestBase";

export const getBackgroundImages = async () => {
  const response = await fetch(`${BASE_URL}/background-images/`);
  const body = await response.json();
  const result = body["imageUrls"];
  return result;
};
