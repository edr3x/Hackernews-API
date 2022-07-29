import { api } from "../config/config";
import axios from "axios";
import Logging from "../library/logger";

export class NewsServices {
  public static async getTop(num: number) {
    const url = api.endpoint.top;
    try {
      const resp = await axios.get(url);
      const res = resp.data;

      let dataUrl: Array<number> = [];
      for (let i = 0; i <= num; i++) {
        dataUrl.push(res[i]);
      }

      let reqUrl: Array<string> = []; //* every url request
      dataUrl.map((elem: any) => {
        const urls = `${api.endpoint.base}/item/${elem}.json`;
        reqUrl.push(urls);
      });

      const newsData = [];
      for (let url of reqUrl) {
        const zz = await axios.get(url);
        const data = zz.data;
        newsData.push(data);
      }
      console.log(newsData);

      return { results: newsData };
    } catch (e: any) {
      Logging.error(e.message);
    }
  }
}
