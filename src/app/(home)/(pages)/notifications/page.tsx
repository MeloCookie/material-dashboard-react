import FmdBadIcon from '@mui/icons-material/FmdBad';
import {AlertsContainer} from "@app/(home)/(pages)/notifications/AlertsContainer";

const alerts = {
  header: "Alerts",
  props: [
    {colorValue:'bg-black', color: 'black'},
    {colorValue:'bg-[#4baf50]', color: 'green'},
    {colorValue: 'bg-[#FF9800]', color: 'orange'},
    {colorValue: 'bg-red-500', color: 'red'}
  ]
}
const alertsWithIcon = {
  header: "Alerts with Icon",
  props: [
    {icon: <FmdBadIcon fontSize="large"/>, colorValue:'bg-black', color: 'black'},
    {icon: <FmdBadIcon fontSize="large"/>, colorValue:'bg-[#4baf50]', color: 'green'},
    {icon: <FmdBadIcon fontSize="large"/>, colorValue: 'bg-[#FF9800]', color: 'orange'},
    {icon: <FmdBadIcon fontSize="large"/>, colorValue: 'bg-red-500', color: 'red'}
  ]
}

const Notifications = () => {
  return (
    <section
      className=" w-full p-20 subpixel-antialiased flex flex-col gap-10
    ">
      <div className="flex justify-center items-center ">
        <AlertsContainer header={alerts.header} props={alerts.props}/>
      </div>
      <div className="flex justify-center items-center">
        <AlertsContainer header={alertsWithIcon.header} props={alertsWithIcon.props}/>
      </div>
    </section>

  )
}
export default Notifications
