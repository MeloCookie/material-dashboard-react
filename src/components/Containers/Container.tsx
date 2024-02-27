import React, {ElementType, HTMLAttributes, ReactNode} from "react";

export interface ContainerProps extends HTMLAttributes<HTMLOrSVGElement> {
  children?: ReactNode | undefined
  header?: string | undefined
  className?: string
  tag?: ElementType
  id?: string
}
export const Container = ({
  className:_className,
  children,
  tag: Tag = 'div',
  id
}: ContainerProps) => {
  const className = [
    'flex w-full ',_className
  ].join(' ')

  return (
    <Tag id={id} className={className}>
      {children}
    </Tag>
  )
}

export default Container
