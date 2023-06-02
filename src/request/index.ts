import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import CryptoJS from "crypto-js";

class HttpClient {
  private service: AxiosInstance;

  private baseURL = import.meta.env.PROD
    ? "https://wisecloud-sg.wiseasy.com/wisecloud-gateway-open-platform"
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
        config.headers.timestamp = new Date().getTime();
        config.data = this.signatrue(config.data);
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

  appSecret = "CQdQBkJJTzxbUZFjtEznNWTfAJcANEVb";
  accessKeyId = "6479baa5f17ac1000199d8f7";
  uuid() {
    var temp_url = URL.createObjectURL(new Blob());
    var uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);
    return uuid.substring(uuid.lastIndexOf("/") + 1);
  }

  signatrue(params?: Record<string, any>) {
    let signaData = "";

    Object.keys(params!).forEach((key, index) => {
      signaData = signaData + `${index !== 0 ? "&" : ""}${key}=${params![key]}`;
    });

    let signature = this.md5(signaData + this.appSecret);

    return {
      signType: "MD5",
      version: "1.0",
      timestamp: new Date().getTime(),
      nonce: this.uuid(),
      encryptionSwitch: "off",
      signatureValue: signature,
      data: JSON.stringify(params),
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
