import axios from "axios";

export const publicKey = (data,url) => {
  return axios({
    method: "POST",
    url: url + "/api/users/public-key",
    headers: {
      AccessControlAllowOrigin: true,
      ContentType: "application/json",
      Accept: "application/json",
    },
    data: data
  });
};