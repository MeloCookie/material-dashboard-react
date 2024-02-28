'use client'
import CloseIcon from "@mui/icons-material/Close";
import {ReactNode, useState} from "react";

interface AlertsCardProps {
  header: string
  props: {icon?: string | ReactNode, colorValue: string, color: string}[]
}
const AlertsItem = (
  item: {icon?: string | ReactNode, colorValue: string, color: string}
) => {
  const [isOpen, setOpen] =
    useState(true)
  const onClick = () => {
    setOpen(val => !val)
  }
  return (
    <li
      className={`text-white text-sm
      rounded-lg flex gap-5 h-14
      ${item.colorValue} text-lg items-center px-5
      ${isOpen? "" : "hidden"}
    `}>
      {item.icon}
      <article className="flex justify-between grow items-center">
        A simple {item.color} alert with an example link.
        Give it a click if you like.
        <button onClick={onClick}>
          <CloseIcon fontSize="large" />
        </button>
      </article>
    </li>
  )
}
export const AlertsContainer = ({header, props}: AlertsCardProps) => {

  return (
    <div
      className="flex flex-col p-4 px-6 bg-white
      shadow-md rounded-lg w-full border
      gap-8 subpixel-antialiased
    ">
      <header className="flex text-lg font-semibold">
        {header}
      </header>
      <ul className="flex flex-col  gap-4">
        {
          props.map((item) => {
            return (
              <AlertsItem
                key={item.color}
                colorValue={item.colorValue}
                color={item.color}
              />
            )
          })


        }
      </ul>
    </div>
  )
}
