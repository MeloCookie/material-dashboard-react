import Container from '@components/Containers/Container'
import {CardProps} from "@components/Cards/Card";
import {CardTitle} from "@components/Cards/CardTitle";
export interface SummaryCardProps extends CardProps {
  text: string | number //value
  pronunciation?: number
  uploaded: string
}
//w > 1168px일 때 flex-wrap 줘서 두 줄 만들기 필요 35rem
const SummaryCard = ({data}: { data: SummaryCardProps[] }) => {
//852에서 글자 줄 깨짐
  return(
    data.map((item) => {
      return(
        <Container
          key={item.head} id="Card-container"
          className="flex flex-col border rounded-xl
          border-gray-300 bg-white max-h-[9rem]
          grow shrink-0
          basis-[15rem] sm:basis-[24rem] lg:basis-0
        ">
          <ul id="icon-info"
             className="flex w-full justify-between items-center
                 h-3/5 p-4 border-b border-gray-200
                 bg-opacity-0 text-black "
          >
            <li
              className="flex justify-center items-center
                  bg-gray-900 text-white rounded-xl w-12 h-12 mr-2"
            >
              <span
              >
                {item.icon}
              </span>
            </li>
            <CardTitle
              headClass="text-end text-sm text-gray-800"
              head={item.head}
              textClass="text-2xl font-semibold text-end"
              text={item.text}
            />
          </ul>
          <ul id="lower"
            className="flex
            w-full justify-between items-center
            h-2/5 p-4 bg-opacity-0 text-[15px]"
          >
            <p className="flex gap-1 text-gray-500">
              <span
              className={`
              font-semibold flex flex-wrap
              ${(item?.pronunciation ?? 0) >= 0
                 ? "text-green-600"
                 : "text-red-500"}
              `}>
               {(item.pronunciation ?? 0) >= 0
                 ? '+'
                 : <></>
               }{item.pronunciation}%
              </span>
              than {item.uploaded}
            </p>
          </ul>
        </Container>
        )})

  )
}
export default SummaryCard
