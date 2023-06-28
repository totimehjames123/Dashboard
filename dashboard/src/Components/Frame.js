import { useState } from "react";
import "../css/Frame.css"
import Logo from "./Logo";
import TopNavBar from "./TopNavBar";

import Dashboard from "./Dashboard";
import Services from "./Services";
import Events from "./Events";
import Home from "./Home";
import Files from "./Files";
import Logout from "./Logout";


const Frame = () => {

    const [activeLink, setActiveLink] = useState("dashboardLink");

    const handleLinkClick = (linkId) => {
        setActiveLink(linkId);
    };

    return (
        <>
        <div className="SideBarContainer">
            <div className="SideNavBar">
                <Logo />
                <p style={{fontSize: '15px', padding: '10px 0 5px 20px', fontFamily: 'Poppins, sans-serif'}}>Admin</p>
                <ul>
                    <li className={activeLink === 'dashboardLink' ? 'activeLink' : ''} onClick={() => handleLinkClick('dashboardLink')}><a><i className="fa fa-home"></i>Dashboard</a></li>
                    <li className={activeLink === 'servicesLink' ? 'activeLink' : ''} onClick={() => handleLinkClick('servicesLink')}><a style={{fontFamily: 'Poppins, sans-serif'}}>Services</a></li>
                    <li className={activeLink === 'eventsLink' ? 'activeLink' : ''} onClick={() => handleLinkClick('eventsLink')}><a>Events</a></li>
                    <li className={activeLink === 'homeLink' ? 'activeLink' : ''} onClick={() => handleLinkClick('homeLink')}><a>Home</a></li>
                    <li className={activeLink === 'filesLink' ? 'activeLink' : ''} onClick={() => handleLinkClick('filesLink')}><a>Files</a></li>
                    <li className={activeLink === 'logoutLink' ? 'activeLink' : ''} onClick={() => handleLinkClick('logoutLink')}><a>Logout</a></li>                
                </ul>
                
            </div>
        </div>
        <div className="MainContainer">
            <TopNavBar />
            <div className="SectionContainer">
                {activeLink == "dashboardLink" ? <Dashboard /> : null}
                {activeLink == "servicesLink" ? <Services /> : null}
                {activeLink == "eventsLink" ? <Events /> : null}
                {activeLink == "homeLink" ? <Home /> : null}
                {activeLink == "filesLink" ? <Files /> : null}
                {activeLink == "logoutLink" ? <Logout /> : null}
            </div>
        </div>
            
            
        </>
        
    )
}

export default Frame;