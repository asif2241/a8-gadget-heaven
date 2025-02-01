import { Outlet } from "react-router-dom"
import DashboardBanner from "../DashboardBanner/DashboardBanner"


const Dashboard = () => {
  return (
    <div>
        <DashboardBanner></DashboardBanner>
        <Outlet></Outlet>
    </div>
  )
}

export default Dashboard