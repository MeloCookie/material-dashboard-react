import axios from "axios";
import {UserInfo} from "@app/(home)/(pages)/axios/user/UserInfo";
import {getAsyncAllPost} from "@api/JsonPlaceholderApi";
async function User(){

  await getAsyncAllPost({})

  return (
    <section>
      User
    <UserInfo />
    </section>
  )
}
export default User
