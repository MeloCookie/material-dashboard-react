'use client'

import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export type ReactButton =  DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement> & {}

export const ClientButton = ({...props}: ReactButton, {children}: {children: ReactNode}) => {
  return (
    <button {...props} >
      {children}
    </button>
  )
}
