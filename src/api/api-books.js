import axios from "axios";
const { VUE_APP_API_KEY, VUE_APP_URL_BOOKS } = process.env;

export default (page, { listCnt, pagerCnt }) => {
  return axios.get(VUE_APP_URL_BOOKS + "/" + page, {
    params: { apikey: VUE_APP_API_KEY, listCnt, pagerCnt },
    withCredentials: true,
  });
};
