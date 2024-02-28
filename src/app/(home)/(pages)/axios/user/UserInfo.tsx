'use client'
import {useRouter, useSearchParams} from "next/navigation";
import {ReactNode, useEffect, useState} from "react";
import JsonPlaceHolder from "@api/JsonPlaceholderApi";
import {GetUserInfoResponse} from "@api/JsonPlaceHolderInterface";
export const UserInfo = ({
  children
}:{
  children?: ReactNode
}) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const id = searchParams.get('id')

  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")

  useEffect(() => {
    JsonPlaceHolder.get<GetUserInfoResponse>(`/users/${id}`).then(res => {
      setName(res.data.name);
      setUserName(res.data.userName)
      setLoading(false)
    }).catch(e => {
      console.log(e)
    })
  }, [id]);

  return (
    loading ? <div>로딩중..</div> :
    <div>
      Id: {id}
      Name: {name}
      UserName: {userName}
      {children}
    </div>
  )
}


