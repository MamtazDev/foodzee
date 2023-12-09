import AXIOS from "./axiosInstance";

export const sendEmail = async (data) => {
  const headers = {
    "Ocp-Apim-Subscription-Key": "962ed46b12364215a95e976478809de1",
  };
  const response = await AXIOS.post("/Public/PostCreateEnquiry", data, {
    headers,
  });
  return response;
};
