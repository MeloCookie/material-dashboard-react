import Link from 'next/link'
/*------------*React*------------*/
import {GenericIconProps, ReactDivProps} from "@type";
import {Attributes, Key, useEffect} from "react";
import {useLayoutConfigContext} from "@utils/LayoutConfigContext";
import sideNavbar from "@app/(home)/layouts/SideNavbar";

/*------------*Types*------------*/

export interface IconItemProps extends ReactDivProps, Attributes {
  name?: string //key
  item?: any
  icon?: GenericIconProps
  printN?: boolean
}

export interface LinkedIconProps extends IconItemProps {
  href: string
  additionalHref?: string
  target?: string
  currentPath?: string
}

export interface ListedIconProps extends Pick<
  LinkedIconProps, 'currentPath' | 'className'> {
  list: LinkedIconProps[]
  liClass?: string
}

const LinkedIconList = (
  {list, liClass, className: _className, currentPath}:ListedIconProps,
) => {
  const {sidenavColor} = useLayoutConfigContext()
  useEffect(() => {
    sidenavColor.setColor(sidenavColor.color)
  }, []);
  return (
    <>
    {
      list.map((item) => {
      const addHref = item.additionalHref;
      if (addHref){
        item.href = [item.href,addHref].join('')
      }

      let className = _className;
      let color: string;
      sidenavColor.color === 'bg-[#F5F5F5]'
        ? color = 'text-black bg-white '
        : color = `text-white `
      if (item.href === currentPath){
       className = [className, sidenavColor.color, color].join(' ')
      }
      return (
        <li
          key={item.name}
          className={`${liClass}`}
        >
          <Link
            key={item.name}
            href={item.href}
            target={item.target}
            className={`${className}`}
          >
            {item.icon
              ? (item.printN
                  ? <>{item.icon}{item.name}</>
                  : <></>
                )
              : item.name
            }
            <p>{item.item}</p>
          </Link>
        </li>
        )
      })
    }
    </>
  )
}
export default LinkedIconList
