import axios from "axios";
import {UserInfo} from "@app/(home)/(pages)/axios/user/UserInfo";
import {getAsyncAllPost} from "@api/JsonPlaceholderApi";
import Modal from '@components/Modal'
import User from '@app/(home)/(pages)/axios/user/page'
async function ModalUser(){

  await getAsyncAllPost({})

  return (
    <Modal>
      <User/>
    </Modal>
  )
}
export default ModalUser
