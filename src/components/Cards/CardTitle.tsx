export interface CardTitleProps {
  headClass?: string
  head: string
  text: string|number
  textClass?: string
}

export const CardTitle = ({headClass, head, text, textClass}: CardTitleProps) => {
  return (
    <li className="flex flex-col gap-1 ">
      <h1 className={headClass}>
        {head}
      </h1>
      <p className={textClass}>
        {text}
      </p>
    </li>
  )
}
