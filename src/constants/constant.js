import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Dashboard from '../components/Dashboard';

export const MENU_ITEMS = [
    {name : 'Dashboard', icon: <DashboardIcon />, path: '/dashboard', component: <Dashboard/>},
    {name : 'Reports', icon: <BarChartIcon />, path: '/reports' , component: <h1>hello world 1</h1>},
    {name : 'Get Started', icon: <AssignmentIcon />, path: '/get_started', component: <h1>hello world 11111</h1>}
];