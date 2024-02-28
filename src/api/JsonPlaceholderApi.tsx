import axios from "axios";
import * as AxiosLogger from 'axios-logger';
import qs from "qs"

import {
  GetAllPostDataRequest,
  GetAllUserInfoRequest,
  GetPostDataResponse,
  GetUserInfoResponse,
} from "@api/JsonPlaceHolderInterface";


axios.defaults.paramsSerializer = params => {
  return qs.stringify(params)
}
const fetchingConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com'
}

const JsonPlaceholderApi = axios.create(fetchingConfig);
JsonPlaceholderApi.interceptors.request.use((req) => {
  return AxiosLogger.requestLogger(req, {
    url: true,
    params: false,
    method: true,
    dateFormat: '[UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\']',
    prefixText: 'JsonPlaceHolder'
  })
})

export const getAsyncAllPost = async (data: GetAllPostDataRequest) => {
  const result =
    await JsonPlaceholderApi.get<GetPostDataResponse>("/posts", data)
  // console.log(result.data)
  console.log(result.status)
}

export const getAsyncAllUser =
  async (data: GetAllUserInfoRequest) => {
    return await JsonPlaceholderApi
      .get<GetUserInfoResponse>("users/", data)
      .then(res => {
        console.log(res.data instanceof Promise)
        return res.data
      }).catch(e => {
        console.error(e.message)
        console.error(e.response.data)
        return undefined
      })
}

export  default JsonPlaceholderApi
