import { api } from "../config/config";
import axios from "axios";
import Logging from "../library/logger";

const newsData = async (resNum: Array<number>) => {
  let reqUrl: Array<string> = [];
  resNum.map((e: number) => {
    const urlD = `${api.endpoint.base}/item/${e}.json`;
    reqUrl.push(urlD);
  });

  const mainData: Array<any> = [];
  for (let url of reqUrl) {
    const zz = await axios.get(url);
    const data = zz.data;
    mainData.push(data);
  }

  return mainData;
};

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

      const resss = await newsData(dataUrl);

      return { results: resss };
    } catch (e: any) {
      throw Error(`Server Error: ${e.message}`);
    }
  }

  public static async getNewNews(num: number) {}
}
