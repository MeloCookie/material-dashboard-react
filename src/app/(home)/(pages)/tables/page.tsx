'use client'
import {ProjectCardBody, Titles} from "@components/Cards/ProjectCard";
import authorsTableData from "@data/authors-table-data";
import Image from "next/image";
import projectsTableData from "@data/projects-table-data";
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
interface TableProps {
  header: string
  title: string
  task: string
  status: string | boolean
  employed: string
}
export interface  TableItemProps {
 img: string;
 name: string;
 email: string;
 job: [string, string];
 online: boolean;
 date: string;
}
const authorTableProps = [
  'Authors Table',
  'AUTHOR',
  'FUNCTION',
  'STATUS',
  'EMPLOYED',
  ' '
]
const titles = [
  'COMPANIES','MEMBERS', 'BUDGET', 'COMPLETION', ' '
]
const TableHeader = (
  {props, children}:
    {props: string[], children: React.ReactNode}
) => {
  const tableHeader = props.shift()
  return (
    <section
      className="flex flex-col w-full bg-white border mt-8 rounded-lg shadow-md"
    >
      <div
        className="flex bg-gray-800 -mt-10 mx-4 rounded-xl h-[4.5rem]
        px-6 items-center text-white font-semibold z-30
      ">
        {tableHeader}
      </div>
      <div
        className="mt-7"
      >
        <Titles titles={props} className="rounded-lg text-sm text-[#78909C]"/>
        {children}
      </div>
    </section>
  )
}
const TableBody = ({dataList, router}: {
  dataList: TableItemProps[], router: AppRouterInstance}
) => {
  return (
    <ul className="flex flex-col mb-2 overflow-x-scroll">
      {
        dataList.map((item) => {
          return (
            <li
              key={item.name}
              className="flex text-xs text-gray-600 py-3 pl-6
              max-h-[4rem] border-t  justify-between gap-10
              "
            >
              <header className="flex gap-4 items-center basis-1/2">
                <Image
                  src={item.img} alt={item.name}
                  width="45" height="45"
                  className="rounded-lg"
                />
                <div className="flex flex-col">
                  <h1 className="text-black text-sm font-semibold">
                    {item.name}
                  </h1>
                  <p className="font-light">{item.email}</p>
                </div>
              </header>
              <div className={`flex flex-col basis-1/6`}>
                <h2 className="text-sm font-semibold">{item.job[0]}</h2>
                <p>{item.job[1]}</p>
              </div>
              <div className={`flex basis-1/6 items-center -ml-1 mr-2`}>
                <span
                  className={`flex justify-center items-center w-14 h-5
                  font-semibold text-xs text-white rounded-lg
                  ${item.online? "bg-green-500" : "bg-gray-600"}
                `}>
                  {item.online ? "ONLINE" : "OFFLINE"}
                </span>
              </div>
              <div className={`flex flex-col basis-1/6 justify-center`}>
                <p>{item.date}</p>
              </div>
              <div className="flex basis-1/6 items-center ">
                <button
                  onClick={() => router.push('/')}
                  className="ml-3"
                >
                  Edit
                </button>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}
const Tables = () => {
  const router = useRouter()
  return (
    <div className="w-full p-5 flex flex-col gap-10">
      {/*<AuthorsTable props={tableProps} items={authorsTableData} />*/}
      <TableHeader props={authorTableProps}>
        <TableBody dataList={authorsTableData} router={router}/>
      </TableHeader>
      <TableHeader props={['Project Table']} >
        <ProjectCardBody
          projectsTableData={projectsTableData}
          titles={titles}
          className="-mt-8"
        >
          <button
            className="flex basis-1/12 items-center pl-6 mr-12"
            onClick={() => router.push('/')}
          >
            <MoreVertSharpIcon />
          </button>
        </ProjectCardBody>
      </TableHeader>
    </div>
  )
}
export default Tables
