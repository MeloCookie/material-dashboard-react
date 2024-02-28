import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import ReportIcon from '@mui/icons-material/Report';
import LoginIcon from '@mui/icons-material/Login';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import {LinkedIconProps} from "@components/LinkedIconList";

export const dashboardItem: LinkedIconProps[] = [
  {
    name: 'Dashboard',
    href: '/',
    icon: <HomeIcon/>,
    printN:true
  },
  {
    name: 'Profile',
    href: '/profile',
    icon: <AccountCircleIcon/>,
    printN:true
  },
  {
    name: 'Tables',
    href: '/tables',
    icon: <BackupTableIcon/>,
    printN:true
  },
  {
    name: 'Notifications',
    href: '/notifications',
    icon: <ReportIcon/>,
    printN:true
  },
  {
    name: 'Axios',
    href: '/axios',
    icon: <FindInPageIcon/>,
    printN:true
  },
]

export const authPage: LinkedIconProps[] = [
  {
    name: 'Log In',
    href: '/login',
    icon: <LoginIcon/>,
    printN:true
  },
  {
    name: 'Sign Up',
    href: '/sign-up',
    icon: <WebStoriesIcon />,
    printN:true
  },
]

