import axios from "axios";

export const register = (data,url) => {
  return axios({
    method: "POST",
    url: url + "/api/users/register",
    headers: {
      AccessControlAllowOrigin: true,
      ContentType: "application/json",
      Accept: "application/json",
    },
    data: data
  });
};