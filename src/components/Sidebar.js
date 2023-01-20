import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PeopleIcon from '@mui/icons-material/People';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material";

function Sidebar(){
    return(
        <div className="sidebar">
             <img src="/images/logo_icon.png" alt="" />
             <h4>FEEDS</h4>
             <SidebarOption active Icon={HomeIcon} text = "Home "/>
             <SidebarOption Icon={TrendingUpIcon} text = "Popular"/>
             <h4>THEMES</h4>
             <SidebarOption Icon={SportsEsportsIcon} text = "Gaming"/>
             <SidebarOption Icon={WorkIcon} text = "Work"/>
             <SidebarOption Icon={PsychologyIcon} text = "Mental-Health"/>
             <SidebarOption Icon={PeopleIcon} text = "Culture"/>
             <SidebarOption Icon={MoreHorizIcon} text = "More "/>
             <Button variant="outlined" className="sidebar__postButton" fullWidth >
                Tell a Secret
            </Button>
        </div>
    )
}

export default Sidebar;