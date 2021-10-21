import axios from "axios";
const { VUE_APP_API_KEY, VUE_APP_URL_VIEW } = process.env;

export default (idx) => {
  return axios.get(VUE_APP_URL_VIEW + "/" + idx, {
    params: { apikey: VUE_APP_API_KEY },
    withCredentials: true,
  });
};
