'use client'
import React, {useEffect, useState} from "react";
import * as L from '@/styles/'
import SummaryCard from "@components/Cards/SummaryCard";
import GraphCard from "@components/Cards/GraphCard";
import Container from "@components/Containers/Container";



export default function MainLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isVisible, setVisible] = useState(false)
  const handleResize = () => {
    if(window.innerWidth >= 1168 && !isVisible ){
      setVisible(true)
    } else if (window.innerWidth < 1168){
      setVisible(false)
    }
  }
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isVisible])
  return (
    <div className={`flex flex-col  w-full p-3
      text-base font-light ${isVisible ? "md:ml-[19.75rem]" : ""}
    `}>
      <main className="flex flex-col pt-8">
        <Container id="main-container" className="flex-col p-2 pt-3 gap-12">
          <div
            id="summary-card"
            className={`flex w-full rounded-xl gap-6 flex-wrap 
      `}>
            {/*<SummaryCard data={topData}/>*/}
          </div>
          <div className="flex w-full gap-5 flex-wrap ">
            {/*<GraphCard data={graphData} />*/}
          </div>
          <div>
            hi
          </div>
        </Container>
      </main>
    </div>
  );
}
