'use client'
import Image from "next/image";
import {
  useState,
  ReactNode, useEffect,
} from "react";
import * as React from "react";
import {SetStateType} from "@type";
import {Accordion, Button, Card, ToggleSwitch} from "flowbite-react";
import {
  FlowbiteAccordionTheme
} from "flowbite-react";
import {
  user,
  pages,
  accountOptions,
  applicationOptions,
  profileInfo,
  icons,
  projects
} from './data'


const Pages = (
  {pages, page, setPage}: {
    pages: {
      name: string, href: string,
      icon: ReactNode
    }[],
    page: string, setPage: SetStateType<string>
  }
) => {
  return (
    <>
      {
        pages.map((item) => {
          return (
            <button
               key = {item.name}
               onClick = {() => setPage(item.name)}
               className={`cursor-pointer text-sm flex items-center
               gap-2 px-4 rounded-lg transition-all transform-none
               flex-shrink flex-col sm:flex-row
               ${page === item.name 
                 ? "border shadow-md " 
                 : ""
               }
             `}>
              {item.icon}
              {/*header 버튼 줄어들게 하기*/}
              <p className="flex flex-shrink text-base subpixel-antialiased">{item.name}</p>
            </button>
          )
        })
      }
    </>
  )
}
const ToggleOptions = (
  {option}: {option: string}
) => {
  const [toggle, setToggle] = useState(false)

  return (
    <li
      className="flex text-sm items-center gap-2"
    >
      <ToggleSwitch
        checked={toggle}
        onChange={() => setToggle(val => !val)}
        sizing="sm"
      />
      <p>
        {option}
      </p>
    </li>
  )
}
const ProfileInfo = () => {
  return (
    <>
      {
        profileInfo.map((item,index) => {
          return (
            <li key={item.head}>
              <p className="flex gap-4 items-center font-semibold text-sm">
                {item.head} {index === 4
                ?
                  <>
                    {icons.map((icon) => {
                      return (
                        <span key="">{icon.icon}</span>
                      )
                    })}
                  </>
                : <span className="text-gray-600 font-normal">
                  {item.value}
                </span>
                }
              </p>
            </li>
          )
        })
      }
    </>
  )
}

const UserMessage = () => {
  const result =
    user.map((item) => {
      return (
        <li
          key={item.name}
          className={`flex gap-4 
          ${window.innerWidth < 1140 ? "my-5" : ""}`}
        >
          <Image
            src={item.img} alt={item.name}
            width="50" height="50"
            className="rounded-lg"
          />
          <div className="flex flex-col gap-1 grow justify-center">
            <h1 className="font-semibold">{item.name}</h1>
            <p className="text-xs text-gray-600 font-light">{item.text}</p>
          </div>
          <button className="text-xs font-semibold">
            REPLY
          </button>
        </li>
      )
    })
  return result
}
const PrivateInfo = () => {

  const accordionRootTheme:FlowbiteAccordionTheme = {
    root: {base: 'TEST ROOT', flush: {on: 'TEST ROOT-FLUSH', off: 'TEST-FLUSH'}},
    content: {base: 'TEST_CONTENT'},
    title: {
      arrow: {
        base: 'TEST TITLE ARROW BASE',
        open: {on: 'TEST TITLE ARROW OPEN ON', off: 'TEST TITLE ARROW OPEN OFF'}
      },
      base: 'TEST TITLE BASE',
      flush: {on: 'TEST TITLE FLUSH ON', off: 'TEST TITLE FLUSH OFF'},
      heading: 'TEST TITLE HEADING',
      open: {on: 'TEST TITLE OPEN ON', off: 'TEST TITLE OPEN OFF'}
    }
  }

  return (
    <Accordion
      theme={accordionRootTheme}
      collapseAll={true}
      id="ACCORDION"
      className={`flex px-4 mt-4 flex-col`
    }>
      <Accordion.Panel
        id="ACCORDION-PANEL1"
        className={`flex flex-col flex-1 gap-3 
      `}>
        <Accordion.Title
          id="ACCORDION-TITLE1"
          className="font-semibold items-center mb-"
        >
          Platform Settings
        </Accordion.Title>
        <Accordion.Content
          id="ACCORDION-CONTENT1"
          className="text-gray-600"
        >
          <p className="text-sm text-gray-400 font-semibold">ACCOUNT</p>
          <ul
            className="flex flex-col gap-6 my-4"
          >
            {
              accountOptions.map((item) => {
                return (
                  <ToggleOptions
                    key={item.option}
                    option={item.option}
                  />
                )
              })
            }
          </ul>
        </Accordion.Content>
        <Accordion.Content
          id="ACCORDION-CONTENT1-2"
          className="text-gray-600"
        >
          <p className="text-sm text-gray-400 font-semibold">APPLICATION</p>
          <ul
            className="flex flex-col gap-6 my-4"
          >
            {
              applicationOptions.map((item) => {
                return (
                  <ToggleOptions
                    key={item.option}
                    option={item.option}
                  />
                )
              })
            }
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      {/*Platform Settings*/}
      {/*Profile Information*/}
      <Accordion.Panel
        id="ACCORDION-PANEL2"
        className="flex flex-col flex-1 gap-4"
      >
        <Accordion.Title
          id="ACCORDION-TITLE2"
          className="font-semibold"
        >
          Profile Information
        </Accordion.Title>
        <Accordion.Content
          id="ACCORDION-CONTENT2"
        >
        <div className="border-b border-black">
          <p className="text-gray-600 font-light text-sm mb-8">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Hi, I'm Alec Thompson, Decisions: If you can't decide,
            the answer is no. If two equally difficult paths, choose
            the one more painful in the short term (pain avoidance
            is creating an illusion of equality).
          </p>
        </div>
        <ul className="flex flex-col justify-between mt-8 gap-4">
          <ProfileInfo/>
        </ul>
        </Accordion.Content>
      </Accordion.Panel>
      {/*Profile Information*/}
      {/*????*/}
      <Accordion.Panel
        id="ACCORDION-PANEL3"
        className="flex flex-col flex-1"
      >
        <Accordion.Title
          id="ACCORDION-TITLE3"
        >
          Platform Settings
        </Accordion.Title>
        <Accordion.Content
          id="ACCORDION-CONTENT3"
          className="text-sm pt-4"
        >
          <UserMessage/>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}

const Members = (
  {members, }: { members: number[],  }
) => {
  // const click = (e: MouseEvent) => {
  //   const {x, y} = {x: e.pageX, y: e.pageY}
  // }

  return (
    <>
      {
        members.map((num) => {
          return (
              <Image
                key={user[num].name}
                id={user[num].id}
                src={user[num].img}
                alt={user[num].name}
                width="25" height="25"
                className="rounded-full border-2 border-white -ml-3"
              />
          )
        })
      }
    </>
  )
}
const ProjectCardList = (
  {width, }: { width: boolean,  }
) => {

  return (
    <>
      {
        projects.map((item, index) => {
          return (
            <li
              key={item.name}
              className={`flex flex-col justify-between flex-1
              md:basis-2/5 lg:basis-0
              ${width ? "" : "basis-2/5"}
            `}>
              <Image
                src={item.img}
                alt="home deco"
                width="700" height="700"
                quality="100"
                className={`mb-4 rounded-lg flex w-full h-[18rem] lg:h-[10rem]
              `}/>
              <article className="flex flex-col gap-2">
                <h2 className="text-gray-600 text-sm font-light">
                  Project #{index + 1}
                </h2>
                <h1 className="font-semibold text-lg">
                  {item.name}
                </h1>
                <p className="text-sm text-gray-600 font-light">
                  {item.text}
                </p>
              </article>
              <div className="flex mt-6 items-center justify-between">
                <button
                  className="h-8 w-[7rem] p-0 bg-white border border-black
                    text-black rounded-lg flex items-center justify-center"
                >
                  <span className="text-xs font-semibold">VIEW PROJECT</span>
                </button>
                <ul className="flex">
                  <Members members={item.member}/>
                </ul>
              </div>
            </li>
          )
        })
      }
    </>
  )
}

const Profile = () => {
  const [page, setPage] =
    useState('App')


  const [width, setWidth] =
    useState(window.innerWidth >= 1140 || window.innerWidth < 960)
  const handleResize = () => {
    setWidth(window.innerWidth >= 1140 || window.innerWidth < 960)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.addEventListener('resize', handleResize)
  }, []);


  return (
    <div className="w-full h-full p-5 subpixel-antialiased mb-">
      <div
        className="h-72 w-full bg-[url('/img/background-image.png')]
        bg-cover bg-center rounded-xl z-0 grow-0 shrink-0"
      ></div>
      <div
        id="profile-wrraper"
        className="w-full p-4"
      >
        <div
          className="flex flex-col bg-white border shadow-md
          w-full rounded-xl -mt-20 p-4 gap-6"
        >
          {/*header*/}
          <section
            className="flex w-full
            flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            <header
              className="flex items-center gap-6 flex-1 w-full"
            >
              <Image
                src="/img/bruce-mars.jpeg"
                alt="bruce mars"
                width="70" height="70"
                className="rounded-lg"
              />
              <div>
                <h1 className="text-lg font-semibold">Richard Davis</h1>
                <p className="text-sm text-gray-600">CEO / Co-Founder</p>
              </div>
            </header>
            <ul className="flex items-center justify-evenly flex-shrink
            text-base md:justify-end flex-1">
              <Pages pages={pages} page={page} setPage={setPage} />
            </ul>
          </section>
          {/*header*/}
          {/*Platform Settings*/}
          { window.innerWidth >= 1140
            ?
            <section
              className={`flex gap-10 px-4 mt-4 flex-col lg:flex-row
              
            `}>
              <div
                className={`flex flex-col flex-1 gap-3 
                ${width ? "" : ""}
                `}>
                <header className="font-semibold">
                  Platform Settings
                </header>
                <div className="text-gray-600">
                  <p className="text-sm text-gray-400 font-semibold">ACCOUNT</p>
                  <ul
                    className="flex flex-col gap-6 my-4"
                  >
                    {
                      accountOptions.map((item) => {
                        return (
                          <ToggleOptions
                            key={item.option}
                            option={item.option}
                          />
                        )
                      })
                    }
                  </ul>
                </div>
                <div className="text-gray-600">
                  <p className="text-sm text-gray-400 font-semibold">APPLICATION</p>
                  <ul
                    className="flex flex-col gap-6 my-4"
                  >
                    {
                      applicationOptions.map((item) => {
                        return (
                          <ToggleOptions
                            key={item.option}
                            option={item.option}
                          />
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
              {/*Platform Settings*/}
              {/*Profile Information*/}
              <div
                className="flex flex-col flex-1 gap-4"
              >
                <header className="font-semibold">Profile Information</header>
                <div className="border-b border-black">
                  <p className="text-gray-600 font-light text-sm mb-8">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Hi, I'm Alec Thompson, Decisions: If you can't decide,
                    the answer is no. If two equally difficult paths, choose
                    the one more painful in the short term (pain avoidance
                    is creating an illusion of equality).
                  </p>
                </div>
                <ul className="flex flex-col justify-between mt-8 gap-4">
                  <ProfileInfo />
                </ul>
              </div>
              {/*Profile Information*/}
              {/*????*/}
              <div
                className="flex flex-col flex-1"
              >
                <header>
                  Platform Settings
                </header>
                <ul className="flex flex-col gap-6 text-sm pt-4">
                  <UserMessage />
                </ul>
              </div>
            </section>
            :<><PrivateInfo /></>
          }
          {/*????*/}
          {/*Projects*/}
          <section
            className="flex flex-col p-4 "
          >
            <header className="flex flex-col text-sm font-semibold gap-2">
              Projects
              <p className="text-xs font-light">
                Architects design houses
              </p>
            </header>
            <ul
              className={`flex mt-6 gap-10 flex-col md:flex-row md:flex-wrap
              ${width ? "" : "flex-wrap flex-row"} lg:flex-row lg:flex-nowrap
            `}>
              <ProjectCardList width={width}/>
            </ul>
          </section>
          {/*Projects*/}
        </div>
      </div>
    </div>
  );
}
export default Profile
