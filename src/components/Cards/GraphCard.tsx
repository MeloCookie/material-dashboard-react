import {SummaryCardProps} from "@components/Cards/SummaryCard";
import Container from "@components/Containers/Container"
import {PropsImage} from "@type";
import Image from "next/image";
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import {CardTitle} from "@components/Cards/CardTitle";
export interface GraphCardProps extends SummaryCardProps
{
  graph: PropsImage
}
const GraphCard = ({data}: { data: GraphCardProps[] }) => {
  return(
    data.map((item) => {
      return(
        <Container
          key={item.head}
          className="flex flex-col border rounded-xl
          border-gray-300 bg-white max-h-[24rem]
          grow shrink-0
          basis-[15rem] sm:basis-[24rem] md:basis-[31rem] lg:basis-0
       ">
          <ul id="icon-info"
              className="flex flex-col w-full items-start
               h-5/6 p-6 border-b border-gray-200 gap-4
               bg-opacity-0 text-black "
          >
            <li className="flex w-full mt-2 justify-center items-center basis-0">
              <Image src={item.graph} alt=" " width="350" height="300"
                     className="flex max-h-[13rem] max-w-full "
              />
            </li>
            <CardTitle
              head={item.head}
              text={item.text}
              headClass=""
              textClass="text-sm text-gray-400"
            />
          </ul>
          <div id="lower"
               className="flex w-full items-center
               h-1/6 p-4 bg-opacity-0 text-gray-400
               px-6 text-sm gap-1"
          >
            <BrowseGalleryIcon fontSize="inherit"/>
            <p>
              {item.uploaded}
            </p>
          </div>
        </Container>
      )})

  )
}
export default GraphCard

