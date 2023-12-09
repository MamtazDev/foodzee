import AXIOS from "./axiosInstance";

export const sendEmail = async (data) => {
  const response = await AXIOS.post("/api/message/sendmail", data);
  return response;
};
