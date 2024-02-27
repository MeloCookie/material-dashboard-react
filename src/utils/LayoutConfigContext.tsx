import {SetStateType} from "@type";
import React, {createContext, PropsWithChildren, ReactNode, useContext, useState} from "react";

export interface LayoutConfigContextProps {
  sidenavColor: {
    color: string
    setColor: SetStateType<string>
  }
  sidenavType: {
    type: string
    setType: SetStateType<string>
  }
  fixedHeader: {
    isFixed: boolean
    setFixed: SetStateType<boolean>
  }
}

const LayoutConfigContext =
  createContext<LayoutConfigContextProps>(
    {} as LayoutConfigContextProps
  )
export const initialLayoutConfig:LayoutConfigContextProps = {
  sidenavColor:{color: 'bg-black', setColor: (color) => {}},
  sidenavType:{type: 'bg-white', setType: (type) => {}},
  fixedHeader:{isFixed: false, setFixed: (isFixed) => {}}
}


export const LayoutConfigProvider = ({children}: PropsWithChildren<{}>) => {
  const [sideNavColor, setSideNavColor] =
    useState(initialLayoutConfig.sidenavColor.color)
  const [sideNavType, setSideNavType] =
    useState(initialLayoutConfig.sidenavType.type)
  const [isFixed, setFixed] =
    useState(initialLayoutConfig.fixedHeader.isFixed)

  const contextValue:LayoutConfigContextProps = {
    sidenavColor: {color: sideNavColor, setColor: setSideNavColor},
    sidenavType: {type: sideNavType, setType: setSideNavType},
    fixedHeader: {isFixed: isFixed , setFixed:setFixed }
  }
  return (
    <LayoutConfigContext.Provider
      value={contextValue}
    >
      {children}
    </LayoutConfigContext.Provider>
  )
}

export const useLayoutConfigContext = ():LayoutConfigContextProps => {
  const context = useContext(LayoutConfigContext)

  if (typeof context === "undefined") {
    throw new Error(
      "useLayoutConfigContext should be used within the LayoutConfigContext provider!",
    );
  }

  return context
}
