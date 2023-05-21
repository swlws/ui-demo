import { createAlova } from "alova";
import GlobalFetch from "alova/GlobalFetch";
import VueHook from "alova/vue";

// 1. 创建alova实例
const alovaInstance = createAlova({
  baseURL: "./",
  timeout: 5000,
  // VueHook用于创建ref状态，包括请求状态loading、响应数据data、请求错误对象error等
  statesHook: VueHook,
  // 请求适配器，推荐使用fetch请求适配器
  requestAdapter: GlobalFetch(),

  beforeRequest(method: any) {
    method.config.headers.token = "token";
  },
  // 全局的响应拦截器
  responded: (response: any) => response.json(),
});

export default alovaInstance;
