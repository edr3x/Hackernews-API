import { api } from "../config/config";
import axios from "axios";
import Logging from "../library/logger";

const newsData = async (num: number, url: string) => {
  try {
    const resp = await axios.get(url);
    const res = resp.data;

    let dataUrl: Array<number> = [];
    for (let i = 1; i <= num; i++) {
      dataUrl.push(res[i]);
    }

    let reqUrl: Array<string> = [];
    dataUrl.map((e: number) => {
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
  } catch (e: any) {
    throw Error(`Server Error: ${e.message}`);
  }
};

export class NewsServices {
  public static async getTop(num: number) {
    const url = api.endpoint.top;
    try {
      const res = await newsData(num, url);

      return { results: res };
    } catch (e: any) {
      throw Error(`Server Error: ${e.message}`);
    }
  }

  public static async getNew(num: number) {
    const url = api.endpoint.new;

    try {
      const res = await newsData(num, url);

      return { results: res };
    } catch (e: any) {
      throw Error(`Server Error: ${e.message}`);
    }
  }

  public static async getBest(num: number) {
    const url = api.endpoint.best;
    try {
      const res = await newsData(num, url);

      return { results: res };
    } catch (e: any) {
      throw Error(`Server Error: ${e.message}`);
    }
  }

  public static async getParticular(id: number) {
    try {
      const url = `${api.endpoint.base}/item/${id}.json`;

      const res = await axios.get(url);
      const ress = res.data;

      return { result: ress };
    } catch (e: any) {
      throw Error(`Server Error: ${e.message}`);
    }
  }
}
