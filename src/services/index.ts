import axios, {AxiosInstance} from "axios";

export const $axios = axios.create({
  baseURL: `https://cataas.com/`,
})

export default {
  async getAll() {
    const { data } = await $axios.get<AxiosInstance>('/api/tags');
    console.log("🚀 ~ file: index.ts ~ line 12 ~ getAll ~ data", data)
    return data;
  }
}

