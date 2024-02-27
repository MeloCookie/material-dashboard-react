import {ReactNode} from "react";
import {StaticImageData, StaticImport} from "next/dist/shared/lib/get-img-props";
import {GenericIconProps, ReactDivProps} from "@type";

export type CardProps = ReactDivProps & {
  className?: string
  head: string
  icon?: GenericIconProps
}

export interface CardDataList {

}
