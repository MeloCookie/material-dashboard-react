import {AxiosRequestConfig} from "axios";

export interface GetPostDataRequest  extends AxiosRequestConfig {
  param: {
    id: number
  }
  query: {

  }
  body: {

  }
  header: {

  }
}

export interface GetAllPostDataRequest extends AxiosRequestConfig {
}

export interface GetPostDataResponse {
  userId: number
  id: number
  title: string
  body: string
}


export type GetAllPostDataResponse = GetPostDataResponse[];


export interface GetUserInfoRequest{
  id: number
}

export interface GetAllUserInfoRequest{

}
export interface GetUserInfoResponse {
  id: number
  name: string
  userName: string
  email: string
  address: {
    street: string  // 도로명 주소
    suite: string   // 상세 주소
    city: string    // 거주도시
    zipcode: string // 우편번호
    geo: {
      lat: string // latitude 위도
      lng: string // longitude 경도
    }
    phone: string
    website: string
    company: {
      name: string
      catchPhrase: string
      bs: string
    }
  }
}

export type GetAllUserInfoResponse = GetUserInfoResponse[]

