// // /* eslint-disable jsx-a11y/anchor-is-valid */
// // import React, { useState } from "react";
// // import Untitled from "../Assets/Untitled.svg";
// // import "../css/landingpage.css";
// // import { HiOutlineBars3 } from "react-icons/hi2";
// // import Box from "@mui/material/Box";
// // import Drawer from "@mui/material/Drawer";
// // import List from "@mui/material/List";
// // import Divider from "@mui/material/Divider";
// // import ListItem from "@mui/material/ListItem";
// // import ListItemButton from "@mui/material/ListItemButton";
// // import ListItemIcon from "@mui/material/ListItemIcon";
// // import ListItemText from "@mui/material/ListItemText";
// // import HomeIcon from "@mui/icons-material/Home";
// // import InfoIcon from "@mui/icons-material/Info";
// // import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
// // import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";


// // const Navbar_k = () => {
// //   const [openMenu, setOpenMenu] = useState(false);
// //   const menuOptions = [
// //     {
// //       text: "Home",
// //       icon: <HomeIcon />,
// //     },
// //     {
// //       text: "About",
// //       icon: <InfoIcon />,
// //     },
// //     {
// //       text: "Testimonials",
// //       icon: <CommentRoundedIcon />,
// //     },
// //     {
// //       text: "Contact",
// //       icon: <PhoneRoundedIcon />,
// //     },
   
// //   ];
// //   return (
// //     <nav>
// //       <div className="nav-logo-container">
// //         <img src={Untitled} alt="" />
// //       </div>
// //       <div className="navbar-links-container">
// //         <a href="">Home</a>
// //         <a href="">About</a>
// //         <a href="">Testimonials</a>
// //         <a href="">Contact</a>
        
// //         <button className="primary-button">Login</button>
        
// //         <button className="primary-button">Signup</button>
      

// //       </div>
// //       <div className="navbar-menu-container">
// //         <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
// //       </div>
// //       <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
// //         <Box
// //           sx={{ width: 250 }}
// //           role="presentation"
// //           onClick={() => setOpenMenu(false)}
// //           onKeyDown={() => setOpenMenu(false)}
// //         >
// //           <List>
// //             {menuOptions.map((item) => (
// //               <ListItem key={item.text} disablePadding>
// //                 <ListItemButton>
// //                   <ListItemIcon>{item.icon}</ListItemIcon>
// //                   <ListItemText primary={item.text} />
// //                 </ListItemButton>
// //               </ListItem>
// //             ))}
// //           </List>
// //           <Divider />
// //         </Box>
// //       </Drawer>
// //     </nav>
// //   );
// // };

// // export default Navbar_k;





// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";
// import Untitled from "../Assets/Untitled.svg";
// import "../css/landingpage.css";
// import { HiOutlineBars3 } from "react-icons/hi2";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import { Link } from "react-router-dom";
// import About from './About';

// const Navbar_k = () => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const menuOptions = [
//     {
//       text: "Home",
//       icon: <HomeIcon />,
//       path: "/",
//     },
//     {
//       text: "About",
//       icon: <InfoIcon />,
//       path: "/about",
//     },
//     {
//       text: "Testimonials",
//       icon: <CommentRoundedIcon />,
//       path: "/testimonials",
//     },
//     {
//       text: "Contact",
//       icon: <PhoneRoundedIcon />,
//       path: "/contact",
//     },
//   ];

//   return (
//     <nav>
//       <div className="nav-logo-container">
//         <img src={Untitled} alt="" />
//       </div>
//       <div className="navbar-links-container">
//         {menuOptions.map((item) => (
//           <Link to={item.path} key={item.text}>
//             {item.text}
//           </Link>
//         ))}
//         <button className="primary-button">Login</button>
//         <button className="primary-button">Signup</button>
//       </div>
//       <div className="navbar-menu-container">
//         <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
//       </div>
//       <Drawer
//         open={openMenu}
//         onClose={() => setOpenMenu(false)}
//         anchor="right"
//       >
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={() => setOpenMenu(false)}
//           onKeyDown={() => setOpenMenu(false)}
//         >
//           <List>
//             {menuOptions.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//         </Box>
//       </Drawer>
//     </nav>
//   );
// };

// export default Navbar_k;



/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";
// import Untitled from "../Assets/Untitled.svg";
// import "../css/landingpage.css";
// import { HiOutlineBars3 } from "react-icons/hi2";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import About from './About';

// const Navbar_k = () => {
//   const [openMenu, setOpenMenu] = useState(false);

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setOpenMenu(false); // Close the menu after clicking
//     }
//   };

//   const menuOptions = [
//     {
//       text: "Home",
//       icon: <HomeIcon />,
//       onClick: () => scrollToSection("homeSection"),
//     },
//     {
//       text: "About",
//       icon: <InfoIcon />,
//       onClick: () => scrollToSection(<About />),
//     },
//     {
//       text: "Testimonials",
//       icon: <CommentRoundedIcon />,
//       onClick: () => scrollToSection("testimonialsSection"),
//     },
//     {
//       text: "Contact",
//       icon: <PhoneRoundedIcon />,
//       onClick: () => scrollToSection("contactSection"),
//     },
//   ];

//   return (
//     <nav>
//       <div className="nav-logo-container">
//         <img src={Untitled} alt="" />
//       </div>
//       <div className="navbar-links-container">
//         {menuOptions.map((item) => (
//           <a
//             href="#"
//             key={item.text}
//             onClick={(e) => {
//               e.preventDefault();
//               item.onClick();
//             }}
//           >
//             {item.text}
//           </a>
//         ))}
//         <button className="primary-button">Login</button>
//         <button className="primary-button">Signup</button>
//       </div>
//       <div className="navbar-menu-container">
//         <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
//       </div>
//       <Drawer
//         open={openMenu}
//         onClose={() => setOpenMenu(false)}
//         anchor="right"
//       >
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={() => setOpenMenu(false)}
//           onKeyDown={() => setOpenMenu(false)}
//         >
//           <List>
//             {menuOptions.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton onClick={item.onClick}>
//                   <ListItemIcon>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//         </Box>
//       </Drawer>
//     </nav>
//   );
// };

// export default Navbar_k;












/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Untitled from "../Assets/Untitled.svg";
import "../css/landingpage.css";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { useNavigate } from 'react-router-dom';

const Navbar_k = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpenMenu(false); // Close the menu after clicking
    }
  };

  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => scrollToSection("homeSection"),
    },
    {
      text: "About",
      icon: <InfoIcon />,
      onClick: () => scrollToSection("aboutSection"),
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
      onClick: () => scrollToSection("testimonialsSection"),
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      onClick: () => scrollToSection("contactSection"),
    },
  ];


  const handlelogin = () => {
    // Navigate to the Diet component with the selected dietTitle
  
    navigate(`/Login`);
  };

  const handlesignup = () => {
    // Navigate to the Diet component with the selected dietTitle
  
    navigate(`/Signup`);
  };

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Untitled} alt="" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <a
            href="#"
            key={item.text}
            onClick={(e) => {
              e.preventDefault();
              item.onClick();
            }}
          >
            {item.text}
          </a>
        ))}
        <button className="primary-button"  onClick={() => handlelogin()}>Login</button>
        <button className="primary-button"  onClick={() => handlesignup()}>Signup</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={item.onClick}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar_k;
