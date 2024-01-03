import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";


export default function DashboardLayout() {
  return (
    <div>
      <Sidebar/>
      
      <Outlet/>
      
    </div>
  );
}
