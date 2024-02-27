'use client'
import React from "react";

import Container from '@components/Containers/Container'
import SideNavbar from "@app/(home)/layouts/SideNavbar";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {Header} from "@app/(home)/layouts/Header";
import SettingBar from "@app/(home)/layouts/Settingbar";
import {LayoutConfigProvider} from "@utils/LayoutConfigContext";
import Footer from "@app/(home)/layouts/Footer";
import SettingButton from "@app/(home)/layouts/SettingButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname()

  const [visibleMenu, setMenu] =
    useState(window.innerWidth >= 1340)
  const [sideNavBar, setSideNavBar] =
    useState(window.innerWidth >= 1340)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = () => {
    if (window.innerWidth >= 1340) {
      setMenu(true)
      setSideNavBar(true)
    } else if (window.innerWidth < 1340) {
      setMenu(false)
      setSideNavBar(false)
    }
  }
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [window.innerWidth >= 1340])

  const [toggleSettingBar, setToggleSettingBar] =
    useState(false)

  return (
    <Container id="main layout" className="bg-[#F5F7F8] overflow-scroll">
      <LayoutConfigProvider>
        <div>
        <SideNavbar isVisible={sideNavBar} path={path}/>
        <SettingBar
          isToggle={toggleSettingBar}
          setIsToggle={setToggleSettingBar}
        />
        </div>
        <Container
          tag="div"
          className={`grow flex-col
          ${visibleMenu ? "md:ml-[19.75rem]" : ""}
          `}>
          <Header
            path={path} isVisible={visibleMenu}
            setToggleSettingBar={setToggleSettingBar}
            setSidenavBar={setSideNavBar}
          />
          {children}
        <Footer />
        </Container>
        <SettingButton setToggle={setToggleSettingBar}/>
      </LayoutConfigProvider>
    </Container>
  );
}
