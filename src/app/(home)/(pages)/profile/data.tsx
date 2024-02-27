import {
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  HomeIcon
} from "@heroicons/react/24/solid";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import * as React from "react";
export const user = [
  {
    id: '0',
    name: "Sophie B.", img: '/img/team-1.jpeg',
    text: 'Hi! I need more information...'
  },
  {
    id: '1',
    name: "Alexander", img: '/img/team-2.jpeg',
    text: 'Awesome work, can you...'
  },
  {
    id: '2',
    name: "Ivanna", img: '/img/team-3.jpeg',
    text: 'About files I can...'
  },
  {
    id: '3',
    name: "Peterson", img: '/img/team-4.jpeg',
    text: 'Have a great afternoon...'
  },
  {
    id: '4',
    name: "Bruce Mars", img: '/img/bruce-mars.jpeg',
    text: 'Hi! I need more information...'
  },
]
export const accountOptions = [
  {option: "Email me when someone follows me"},
  {option: "Email me when someone answers on my post"},
  {option: "Email me when someone mentions me"}
]
export const applicationOptions = [
  {option: "New launches and projects"},
  {option: "Monthly product updates"},
  {option: "Subscribe to newsletter"}
]
export const pages = [
  {
    name: 'App', href: '/profile/app',
    icon: <HomeIcon className="w-6 h-6 mb-2" />
  },
  {
    name: 'Message', href: '/profile/message',
    icon: <ChatBubbleLeftEllipsisIcon className="w-6 h-6 mb-2" />
  },
  {
    name: 'Settings', href: '/profile/settings',
    icon: <Cog6ToothIcon className="w-6 h-6 mb-2" />
  },
]
export const profileInfo = [
  {head: 'First Name:', value: "Alec M. Thompson"},
  {head: 'Mobile:', value: "(44) 123 1234 123"},
  {head: 'Email:', value: "alecthompson@gmail.com"},
  {head: 'Location:', value: "USA"},
  {head: 'Social:', value: ' '}
]
export const icons = [
  {icon: <FacebookRoundedIcon className="text-[#1776D2]" fontSize="small"/>},
  {icon: <TwitterIcon className="text-[#43A5F5]" fontSize="small"/>},
  {icon: <InstagramIcon className="text-[#BB67C6]" fontSize="small"/>},
]
export const projects = [
  {
    name: "Modern",
    text: "As Uber works through a huge amount of internal management turmoil.",
    img: '/img/home-decor-1.jpeg',
    member: [0, 1, 2, 3]
  },
  {
    name: "Scandinavian",
    text: "Music is something that every person has his or her own specific opinion about.",
    img: '/img/home-decor-2.jpeg',
    member: [3, 2, 1, 0]
  },
  {
    name: "Minimalist",
    text: "Different people have different taste, and various types of music.",
    img: '/img/home-decor-3.jpeg',
    member: [0, 1, 2, 3]
  },
  {
    name: "Gothic",
    text: "Why would anyone pick blue over pink? Pink is obviously a better color.",
    img: '/img/home-decor-4.jpeg',
    member: [3, 2, 1, 0]
  },
]
