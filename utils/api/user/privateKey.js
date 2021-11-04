import axios from "axios";

export const privateKey = (data,url) => {
  return axios({
    method: "POST",
    url: url + "/api/users/private-key",
    headers: {
      AccessControlAllowOrigin: true,
      ContentType: "application/json",
      Accept: "application/json",
    },
    data: data
  });
};