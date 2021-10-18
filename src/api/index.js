// import apiBook from "./api-book";
// import apiBooks from "./api-books";
// export default { apiBook, apiBooks };


import axios from "axios";
const { VUE_APP_API_KEY, VUE_APP_URL_VIEW, VUE_APP_URL_BOOKS } = process.env;

const apiBook = (idx) => {
  return axios.get(VUE_APP_URL_VIEW + "/" + idx, {
    params: { apikey: VUE_APP_API_KEY },
    withCredentials: true,
  });
};

const apiBooks = (page, { listCnt, pagerCnt }) => {
  return axios.get(VUE_APP_URL_BOOKS + "/" + page, {
    params: { apikey: VUE_APP_API_KEY, listCnt, pagerCnt },
    withCredentials: true,
  });
};

export { apiBook, apiBooks };
