import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Dashboard from "../components/Dashboard";
import GetStarted from "../components/GetStarted/GetStarted";

export const MENU_ITEMS = [
  {
    name: "Dashboard",
    icon: <DashboardIcon color="warning" />,
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    name: "Get Started",
    icon: <AssignmentIcon color="warning" />,
    path: "/get_started",
    component: <GetStarted />,
  },
];
