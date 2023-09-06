import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

const items = [
    {name : 'Dashboard', icon: <DashboardIcon />, path: '/dashboard'},
    {name : 'Reports', icon: <DashboardIcon />, path: '/reports'},
    {name : 'Get Started', icon: <DashboardIcon />, path: '/get_started'}

];

export const mainListItems = (
    <React.Fragment>
        {items.map(element => (
            <ListItemButton onClick={() => alert(element.path)}>
                <ListItemIcon>
                    {element.icon}
                </ListItemIcon>
                <ListItemText primary={element.name} />
            </ListItemButton>
        ))};
    </React.Fragment>
);


