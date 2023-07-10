/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState} from "react";
import Logo from "../Assets/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
import { Link } from 'react-router-dom';
// import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
   const [openMenu, setOpenMenu] = useState(false);

//   const { user, logout } = useContext(AuthContext);
//    const handleLogout = () => {
//     logout();
// };
   const menuOptions = [
  //   {
  //     text: "Home",
  //     icon: <HomeIcon />,
  //   },
  //   {
  //     text: "About",
  //     icon: <InfoIcon />,
  //   },
  //   
   ];
  return (
    // <nav>
    //   <div className="nav-logo-container">
    //     <img src={Logo} alt="" />
    //   </div>
    //   <div className="navbar-links-container">
      
    //     <Link to='/signin' style={{color:'#003466'}}>Sign in as Landlord</Link>
    //     <Link to='/tenant/signin'  style={{color:'#003466'}}>Sign in as Tentant</Link>
    //   </div>
    //   <div className="navbar-menu-container">
    //     <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    //   </div>
    //   <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
    //     <Box
    //       sx={{ width: 250 }}
    //       role="presentation"
    //       onClick={() => setOpenMenu(false)}
    //       onKeyDown={() => setOpenMenu(false)}
    //     >
    //       <List>
    //         {menuOptions.map((item) => (
    //           <ListItem key={item.text} disablePadding>
    //             <ListItemButton>
    //               <ListItemIcon>{item.icon}</ListItemIcon>
    //               <ListItemText primary={item.text} />
    //             </ListItemButton>
    //           </ListItem>
    //         ))}
    //       </List>
    //       <Divider />
    //     </Box>
    //   </Drawer>
    // </nav>
    <nav class="navbar navbar-expand-lg bg-body-tertiary m-0">
              <div class="container-fluid">
                <a class="navbar-brand" href="/"><img
                        src={Logo}
                        width="150"
                        height="0"
                        className="d-inline-block align-top"
                        alt="Logo"
                    /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link fw-bolder" aria-current="page" href="/signin" style={{color:'#003466'}}>Sign In as Landlord</a>
                    </li><li class="nav-item">
                      <a class="nav-link fw-bolder" aria-current="page" href="/tenant/signin" style={{color:'#003466'}}>Sign In as Tenant</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
  );
};

export default Navbar;
