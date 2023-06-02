import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import CryptoJS from "crypto-js";

class HttpClient {
  private service: AxiosInstance;

  private baseURL = import.meta.env.PROD
    ? "https://wisecloud.wiseasy.com/wisecloud-gateway-open-platform"
    : "/proxy";

  constructor() {
    this.service = axios.create({
      baseURL: this.baseURL,
      // 超时60s
      timeout: 60000,
    });
    // 请求拦截器
    this.service.interceptors.request.use(
      async (config) => {
        NProgress.start();
        // config.headers.Authorization = await localforage.getItem(
        //   'Authorization'
        // );
        // config.headers.nonce = v4();
        config.headers.timestamp = new Date().getTime();

        config.params = this.signatrue(
          config.url,
          JSON.stringify(config.params)
        );

        return config;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      }
    );

    //响应拦截器
    this.service.interceptors.response.use(
      (response) => {
        NProgress.done();
        const res = response.data;
        if (response.status >= 200 && response.status < 300) {
          if (res.code === 401) {
            // showSnackbar(res.message);
            // location.replace("/login");
            return res;
          }

          return res;
        }
        return Promise.reject(new Error(res.message || "Error"));
      },
      (error) => {
        NProgress.done();
        console.log("err" + error);
        return Promise.reject(error);
      }
    );
  }

  async post<T = any>(
    url: string,
    params: D,
    config?: AxiosRequestConfig<D>
  ): Promise<Response<T>> {
    return await this.service
      .post<T, Response<T>, D>(url, params, config)
      .catch((error) => {
        console.log("error=>", error);
        return { code: -1, data: null, message: error } as Response<T>;
      });
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<Response<T>> {
    return await this.service
      .get<T, Response<T>, D>(url, config)
      .catch((error) => {
        console.log("error=>", error);
        return { code: -1, data: null, message: error } as Response<T>;
      });
  }

  md5 = (str: string) => {
    return CryptoJS.MD5(str).toString();
  };

  appSecret = "Z8mNOaVG1PxFMl6J6vM2euS3F1qsE7P4l5HsqvcsvX9vciLtdV";
  accessKeyId = "Z8mNOaVG1PxFMl6J6vM2euS3F1qsE7P4l5HsqvcsvX9vciLtdV";
  uuid() {
    var temp_url = URL.createObjectURL(new Blob());
    var uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);
    return uuid.substring(uuid.lastIndexOf("/") + 1);
  }

  signatrue(url?: string, params?: string) {
    let options: Record<string, any> = {
        appid: "lwzz",
        nonce: this.uuid(),
        timestamp: new Date().getTime(),
      },
      signaData = url,
      authentications = ["Authorization", "appid", "nonce", "timestamp"];

    authentications.map((key, index) => {
      signaData = signaData + `${index !== 0 ? "&" : ""}${key}=${options[key]}`;
    });

    let signature = this.md5(signaData + this.appSecret);

    return {
      signType: "MD5",
      version: "1.0",
      encryptionSwitch: "on",
      signatureValue: signature,
      data: params,
      accessKeyId: this.accessKeyId,
    };
  }
}

type D = Record<string, any> | FormData;

export interface Response<T> {
  code: number;
  data: T;
  message: string;
  totalCount?: number;
}

const httpClient = new HttpClient();

export default httpClient;
