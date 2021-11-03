import axios from "axios";

export const login = (data,url) => {
  return axios({
    method: "POST",
    url: url + "/api/users/login",
    headers: {
      AccessControlAllowOrigin: true,
      ContentType: "application/json",
      Accept: "application/json",
    },
    data: data
  });
};