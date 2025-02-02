import { Outlet, useLoaderData } from "react-router-dom"
import DashboardBanner from "../DashboardBanner/DashboardBanner"


const Dashboard = () => {
  const data = useLoaderData();

  return (
    <div>
        <DashboardBanner></DashboardBanner>
           <Outlet context={data}></Outlet>
    </div>
  )
}

export default Dashboard