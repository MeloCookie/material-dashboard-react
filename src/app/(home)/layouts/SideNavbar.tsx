import LinkedIconList from "@components/LinkedIconList";
import {dashboardItem, authPage} from "@app/(home)/layouts/linkData";
import * as L from '@/styles/layouts.style'
import {useLayoutConfigContext} from "@utils/LayoutConfigContext";
const SideNavbar = (
  {isVisible, path}: {
    isVisible: boolean, path: string
}) => {
  const {sidenavType} = useLayoutConfigContext();



  return (
    <nav
      className={`
      ${L.col} w-full h-[calc(100vh-30px)] fixed m-4 mr-2 mb-2
      max-w-[18rem] border-2 transition-transform  z-50
      rounded-xl justify-start items-center py-6 gap-9
      ${isVisible? "translate-x-0" : "-translate-x-80"}
      ${sidenavType.type}
      ${sidenavType.type === 'bg-[#2f2f2f]'
        ? "text-white"
        : "text-[#607D8B]"}
    `}>{}
      <h1 className={`
      
      `}>
        Material Tailwind React
      </h1>
      <div className={`${L.col} w-full gap-10 px-4 mt-1 bg-transparent`}>
        <ul className={`${L.col} text-xl justify-center gap-1`}>
          <LinkedIconList
            list={dashboardItem} currentPath={path}
            liClass={`flex ${L.full} rounded-lg text-base`}
            className={`flex p-3 ${L.full} gap-4 rounded-lg`}
          />
        </ul>
        <div className={`${L.col} w-full flex-1 gap-y-3 text-sm font-semibold`}>
          <h1
            className={`flex mx-3 
            ${sidenavType.type === 'bg-[#2f2f2f]'
              ? "text-[#cdcdcd]"
              : "text-[#5C656A]"}
          `}>
            AUTH PAGES
          </h1>
          <ul className={`${L.col} text-xl justify-center gap-1`}>
            <LinkedIconList
              list={authPage}
              currentPath={path}
              liClass={`flex ${L.full} text-base rounded-lg`}
              className={`flex p-3 ${L.full} gap-4  rounded-lg`}
            />
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default SideNavbar
