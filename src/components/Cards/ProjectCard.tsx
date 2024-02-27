import Container from "@components/Containers/Container"
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
export interface ProjectDataProps {
  img: string
  title: string
  route: string
  members: {img: string, name: string}[]
}
export interface ProjectTableProps {
  img: string
  name: string
  members: {img: string, name: string}[]
  budget: string
  completion: number
}
export interface ProjectCardProps  {
  projectsTableData: ProjectTableProps[]
}


export const Titles = (
  {titles, className}: {titles: string[], className?: string}
) => {

  return (
    <li
      className={`
        flex text-xs text-gray-600 py-4
        px-6 justify-between gap-10
        ${className}
    `}>
      {
        titles.map((_key, index) => {
          return (
            <>
              {!index
                ? <p className="flex basis-3/6" key={crypto.randomUUID()}>
                  {titles[index]}
                </p>
                : <p className="flex pl-4 basis-1/6" key={crypto.randomUUID()}>
                  {titles[index]}
                </p>
              }
            </>
          )
        })
      }
    </li>
  )
}

const Companies = ({item}: {item: ProjectTableProps}) => {
  return (
    <p
      className={`flex basis-3/6 items-center gap-4 text-sm font-semibold`}
    >
      <Image
        src={item.img} alt=""
        width="40" height="40"
        className=""
      />
      {item.name}
    </p>
  )
}

type Members = {
  img: string
  name: string
}
const ItemMembers = ({members}: {members:Members[]}) => {
  return (
    <div className="flex items-center">{
      members.map((item) => {
        return (
          <>
          <Image
            key={crypto.randomUUID()}
            src={item.img} alt=" "
            width="32" height="32"
            className="rounded-full min-w-8
            border-4 border-white -mr-4"
          />
          </>
        )
      })
    }</div>
  )
}

export const ProjectCardBody = (
  {titles, projectsTableData, children, className}:{
    titles: string[], projectsTableData: ProjectTableProps[],
    children: React.ReactNode, className?: string
  }
) => {
  return (
    <div
      id="content"
      className={` min-w-[40.125rem] ${className}
    `}>
      <ul className="flex flex-col grow overflow-x-scroll ">
        {/*min-w-[40rem] overflow-scroll*/}
        <Titles titles={titles}/>
        {
          projectsTableData.map((item) => {
            return (
              <li
                key={item.name}
                className="flex text-xs text-gray-600 py-3 px-4
                    max-h-[4rem] border-t  justify-between gap-10"
              >
                <Companies item={item}/>
                <p className={`flex basis-1/6`}>
                  <ItemMembers members={item.members}/>
                </p>
                <p className={`flex basis-1/6 items-center pl-4`}>
                  {item.budget}
                </p>
                <div className={`flex flex-col basis-1/6 pl-8`}>
                  <p>{item.completion}%</p>
                  <span>graph</span>
                </div>
                {children}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
export const ProjectCard = (
  {projectsTableData, className, titles, children}: {
    projectsTableData: ProjectTableProps[],
    className?: string, titles: string[]
    children?: React.ReactNode
  }
) => {
  return (
    <Container
      className={`flex flex-col border rounded-xl
      border-gray-300 bg-white  py-6 lg:overflow-visible
      grow ${className}
       `}
    >
      <div className=" flex flex-col gap-6">
        <div id="header" className="flex flex-col gap-1 px-6">
          <h1 className="font-semibold">
            Projects
          </h1>
          <p className="flex text-gray-400 gap-1 text-sm">
            <CheckCircleIcon width="15"/>
            <span className="font-semibold text-gray-600">
              30 done
            </span>
            this month
          </p>
        </div>
        <div id="content" className=" min-w-[40.125rem]">
          <ul className="flex flex-col grow overflow-x-scroll ">
            {/*min-w-[40rem] overflow-scroll*/}
            <Titles titles={titles}/>
            {
              projectsTableData.map((item) => {
                return (
                  <li
                    key={item.name}
                    className="flex text-xs text-gray-600 py-3 px-4
                    max-h-[4rem] border-t  justify-between gap-10"
                  >
                    <Companies item={item}/>
                    <p className={`flex basis-1/6`}>
                      <ItemMembers members={item.members}/>
                    </p>
                    <p className={`flex basis-1/6 items-center pl-4`}>
                      {item.budget}
                    </p>
                    <div className={`flex flex-col basis-1/6 pl-8`}>
                      <p>{item.completion}%</p>
                      <span>graph</span>
                    </div>
                    {children}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </Container>
  )
}


