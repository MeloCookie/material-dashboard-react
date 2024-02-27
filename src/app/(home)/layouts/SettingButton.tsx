import {SetStateType} from "@type";
import {Cog6ToothIcon} from "@heroicons/react/24/solid";

const SettingButton = (
  {setToggle}: {setToggle: SetStateType<boolean>}
) => {

  return (
    <button
      className="flex justify-center items-center p-3
      fixed right-10 bottom-10  rounded-full bg-white h-12 w-12"
      onClick={() => setToggle(val => !val)}
    >
      <Cog6ToothIcon />
    </button>
  )
}
export default SettingButton
