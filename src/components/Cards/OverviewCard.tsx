import {CardProps} from "@components/Cards/Card";
import Container from "@components/Containers/Container"
import React from "react";
import NorthIcon from '@mui/icons-material/North';

export interface OverviewDataList {
  icon:  React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<
      SVGSVGElement>> &
    { title?: string, titleId?: string} &
    React.RefAttributes<SVGSVGElement>>

  color: string
  title: string
  description: string
}

const OverviewCard = ({data}: {data: OverviewDataList[]}) => {
  return (
    <Container
      className="flex flex-col w-full p-6 gap-6
      bg-white border border-gray-300 rounded-xl
    ">
      <div
        className="flex flex-col gap-3
      ">
        <h1 className="font-semibold">Orders Overview</h1>
        <p className="text-xs text-gray-600">
          <span className="text-green-500">
            <NorthIcon color="inherit"/>
          </span>
          <span className="font-semibold">24%</span> this month
          </p>
      </div>
      <ul className="flex flex-col justify-between p-2">
        {
          data.map((item, idx ) => {
            return (
              <li
                key={item.description}
                className="flex gap-4 text-sm font-semibold text-gray-600"
              >
                <div
                  className="flex flex-col items-center gap-3"
                >
                  <item.icon className="w-5 text-gray-400"/>
                  {
                    data[idx + 1] !== undefined
                      ? <span className="border-t border w-0 h-5 mb-3"/>
                      : <></>
                  }
                </div>
                <div
                  className="flex flex-col"
                >
                  <p>{item.title}</p>
                  <p className="text-xs text-gray-400">
                    {item.description}
                  </p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </Container>
  )
}
export default OverviewCard
