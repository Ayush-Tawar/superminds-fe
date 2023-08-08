import Axios from "axios";
//Endpoints
const isDev = false;

export const SITE_DOMAIN = isDev
  ? "http://172.20.20.112:3000"
  : "https://superminds-backend-mfuep.ondigitalocean.app";

export const BASE_URL =
  "https://superminds-backend-mfuep.ondigitalocean.app/v1/";
export const MEDIA_URL = "https://superminds.sgp1.cdn.digitaloceanspaces.com";

export const appsApi = Axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiErrorHandler = (error) => {
  const { response } = error;
  console.error(error);
  if (response && response.data) {
    if (response.data.Message) {
      console.error(response.data.Message);
    }
    if (response.data.message) {
      console.error(response.data.message);
    }
  }
};
