import Container, {ContainerProps} from './Container'

interface CardContainerProps extends ContainerProps {
  basis: {media:string, basis:string}[] //sm, md, lg, xl, 2xl
  maxHeight?: string
}
export const CardContainer = (
  {children, className, basis, maxHeight, id}: CardContainerProps
) => {
  const basises: string = [
    basis.map((key) => {
      return [key.media, ':', key.basis].join('')
    })
  ].join(' ')
  const maxheight = ['max-h-[',maxHeight,']'].join('')
  return(
    <Container
      id={id}
      className={`flex flex-col border rounded-xl
        border-gray-300 bg-white
        grow shrink-0 lg:basis-0
        ${basises} ${maxheight} ${className}
        }`}>
      {children}
    </Container>
  )
}
