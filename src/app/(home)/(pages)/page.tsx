'use client'
import PaymentsIcon from "@mui/icons-material/Payments";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import cat from '@public/cat.png'
/*------------*Icon, Image*------------*/
import Container from '@components/Containers/Container'
import SummaryCard, {SummaryCardProps} from "@components/Cards/SummaryCard";
import GraphCard, {GraphCardProps} from "@components/Cards/GraphCard";
import React from "react";
import {ProjectCard} from "@components/Cards/ProjectCard";
import OverviewCard from "@components/Cards/OverviewCard";
/*------------*Component, Function*------------*/
import projectsTableData from "@data/projects-table-data";
import ordersOverviewData from "@data/orders-overview-data";
const topData: SummaryCardProps[] = [
  {
    head: 'Today\'s Money',
    text: '$53k',
    pronunciation: 55,
    uploaded: 'last week',
    icon: <PaymentsIcon />
  },
  {head: 'Today\'s Users',
    text: '2300',
    pronunciation: 3,
    uploaded: 'last month',
    icon: <PeopleAltIcon />},
  {head: 'New Clients',
    text: '3462',
    pronunciation: -2,
    uploaded: 'yesterday',
    icon: <PersonAddIcon />},
  {head: 'Sales',
    text: '$103,430',
    pronunciation: 5,
    uploaded: 'yesterday',
    icon: <SignalCellularAltIcon />},
]
const graphData: GraphCardProps[] = [
  {
    head: 'Website View',
    graph: cat,
    uploaded: 'campaign sent 2 days ago',
    text: 'Last Campaign Performance'
  },
  {
    head: 'Daily Sales',
    graph: cat,
    uploaded: 'updated 4 min ago',
    text: '15% increase in today sales'
  },
  {
    head: 'Completed Tasks',
    graph: cat,
    uploaded: 'just updated',
    text: 'Last Campaign Performance'
  },
]
/*------------*data*------------*/
const titles = [
  'COMPANIES','MEMBERS', 'BUDGET', 'COMPLETION'
]
export default function Home(){


  return (
    <div className={`flex flex-col w-full p-3
      text-base font-light 
    `}>
      <main className="flex flex-col pt-3">
        <Container id="main-container" className="flex-col p-2 pt-3 gap-6">
          <div
            id="summary-card"
            className={`flex w-full rounded-xl gap-6 flex-wrap
          `}>
            <SummaryCard data={topData}/>
          </div>
          <div className="flex w-full gap-6 flex-col sm:flex-wrap md:flex-row">
            <GraphCard data={graphData}/>
          </div>
          <ul
            className={`flex w-full gap-6 grow shrink-1
            lg:flex-nowrap flex-wrap
          `}>
            <li

              className={`flex grow w-full max-w-[63rem]
              overflow-x-scroll lg:overflow-visible 
            `}>
              <ProjectCard
                projectsTableData={projectsTableData}
                titles={titles}
              />
            </li>
            <li
              className={`flex flex-1 w-full min-w-[19.5rem]
            `}>
              <OverviewCard data={ordersOverviewData}/>
            </li>
          </ul>
        </Container>
      </main>
    </div>
  )
}
