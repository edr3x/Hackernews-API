import { api } from "../config/config";
import axios from "axios";
import Logging from "../library/logger";

export class NewsServices {
  public static async getTop() {
    const url = api.endpoint.top;

    try {
      const resp = await axios.get(url);
      const res = resp.data;

      let dataUrl: Array<number> = [];
      for (let i = 0; i <= 40; i++) {
        dataUrl.push(res[i]);
      }

      let reqUrl: Array<string> = [];
      dataUrl.map((elem: any) => {
        const urls = `${api.endpoint.base}/item/${elem}.json`;
        reqUrl.push(urls);
      });

      const resDataa = reqUrl.map(async (data) => {
        await axios.all([await axios.get(data)]);
      });

      console.log(resDataa);

      return { results: resDataa };
    } catch (e: any) {
      Logging.error(e.message);
    }
  }
}
