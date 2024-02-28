import Link from "next/link"
import JsonPlaceHolder from "@api/JsonPlaceholderApi";
import {
  GetAllPostDataResponse,
  // GetAllUserInfoResponse,
  GetUserInfoResponse
} from "@api/JsonPlaceHolderInterface";
import JsonPlaceholderApi from "@api/JsonPlaceholderApi";

async function getPosts():Promise<GetAllPostDataResponse | undefined>{
  try {
    const result =
      await JsonPlaceHolder.get<GetAllPostDataResponse>('/posts')
        .then()
    console.log('success fetching PostData')
    return result.data
  } catch (e: any) {
    console.error(e.message)
    console.error(e.response.data)
  }
  return undefined
}
// export async function getUsers({}: {}): Promise<GetAllUserInfoResponse | undefined>{
//   try{
//     await JsonPlaceholderApi.get<GetAllUserInfoResponse>('/users',)
//     console.log('Success fetching UserData[]')
//   } catch(e: any){
//     console.error(e.message)
//     console.error(e.response.data)
//   }
//   return undefined
// }

const RouteUserId = async ({
  userId
}: {
  userId: number
}) => {
  const user = await JsonPlaceholderApi
    .get<GetUserInfoResponse>(`users/${userId}`)
    .then(res => {
      return res.data
    })
  return (
    <Link
      href={{
        pathname: `axios/user/`,
        query: {id: user?.id}
      }}
      className="flex flex-col"
    >
      <p>{user?.userName}</p>
      <p>{user?.name}</p>
    </Link>
  )
}
async function PostLists ({
  postData
}: {
    postData: GetAllPostDataResponse,
}) {
  return (
    <tbody className="flex flex-col px-2 w-full border-t border-black text-sm">
    {
      postData.map((item) => {
        return (
          <tr
          key={item.id}
            className="flex min-h-14 items-center border-b border-black grow"
          >
            <td
              className="flex justify-center items-center w-[7%]"
            >
              {item.id}.
            </td>
            <td
              className="flex justify-center items-center w-[12%]"
            >
              <p className="line-clamp-2">{item.title}</p>
            </td>
            <td
              className="flex items-center w-[69%]"
            >
              <p className="line-clamp-3">
                {item.body}
              </p>
            </td>
            <td
              className="flex justify-center items-center w-[12%] cursor-pointer"
            >
              <RouteUserId userId={item.userId}/>
            </td>
          </tr>
        )
      })
    }
    </tbody>
  )
}

async function FetchDataPage() {
  const posts = await getPosts()

  return (
    <section
      className="flex flex-col border shadow-md rounded-lg p-6
      gap-5
    ">
      <header className="text-xl">
        게시판
      </header>
      <table className="flex flex-col">
        <thead className="flex w-full px-2 text-base">
        <tr className="flex w-full h-14 items-center border-b">
          <th className="flex justify-center items-center w-[7%]">
            No.
          </th>
          <th className="flex justify-center items-center w-[12%]">
            Title
          </th>
          <th className="flex justify-center items-center w-[69%]">
            Body
          </th>
          <th className="flex justify-center items-center w-[12%]">
            Uploader
          </th>
        </tr>
        </thead>
        <PostLists postData={posts!!} />
      </table>
    </section>
  )
}
export default FetchDataPage
