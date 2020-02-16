import axios from "axios";
import { WEB_LIST_API } from "../constants/apis";

const fetchWebSeriesCall = () => {
  return axios.get(WEB_LIST_API);
};

export { fetchWebSeriesCall };
