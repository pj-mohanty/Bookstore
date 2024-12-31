// // import React from 'react'
// import { useState } from "react";
// import { FaGripLines } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     const links = [
//         {
//             title: "Home",
//             link:"/",
//         },
//         {
//             title: "About",
//             link:"/about",
//         },
//         {
//             title: "All Books",
//             link: "/all-books",
//         },
//         {
//             title: "Cart",
//             link: "/cart",
//         },
//         {
//             title: "Profile",
//             link: "/profile",
//         },
//     ];
//     const [MobileNav, setMobileNav]= useState("hidden");
//   return (
//     <>
//     <nav className="fixed top-0 left-0 w-full z-50 flex bg-zinc-800 text-white px-8 py-4 items-center justify-between ">
//         <Link to="/" className="flex items-center">
//             <img className="h-10 me-4" src="https://i.pinimg.com/736x/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.jpg" alt='logo'/>
//             <h1 className='text-2xl font-semibold'>BookStore</h1>
//         </Link>
//         <div className="nav-links-bookstore block md:flex items-center gap-4">
//             <div className="hidden md:flex gap-4">
//             {links.map((items, i) => {
//                 console.log(items.link);
//                 return (
//                     <Link
//                     to={items.link}
//                     className="hover:text-blue-500 transition-all duration-300"
//                     key={i}
//                     >
//                     {items.title}
//                     </Link>
//                 );
//                 })}

//                  {/* {links.map((items,i)=>(<Link to={items.link} className="hover:text-blue-500 transition-all duration-300" key={i}>{items.title}</Link>))} */}
//             </div>
//             <div className="hidden md:flex gap-4">
//             <Link to="/LogIn" className="px-4 py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all duration-300">
//                     LogIn
//             </Link>
//             <Link to="/SignUp" className="px-4 py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all duration-300">
//                      SignUp
//             </Link>
//             </div>
//             <button className="text-white text-2xl  hover:text-zinc-400" onClick={()=>MobileNav === "hidden" ? setMobileNav ( "block") : setMobileNav("hidden")}>
//                 <FaGripLines />
//             </button>
//         </div>
//     </nav>
//     <div className={`${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}>
//     {links.map((items, i) => {
//                 console.log(items.link);
//                 return (
//                     <Link
//                     to={items.link}
//                     className={`${MobileNav} text-white mb=8 text-4xl font-semibold hover:text-blue-500 transition-all duration-300`}
//                     key={i} onClick={()=>MobileNav === "hidden" ? setMobileNav ( "block") : setMobileNav("hidden")}
//                     >
//                     {items.title}{" "}
//                     </Link>
//                 );
//                 })}
//             <Link to="/LogIn" className={`${MobileNav}px-4 mb-8 text-4xl font-semibold py-2 border border-blue-500 rounded hover:bg-white text-white hover:text-zinc-800 transition-all duration-300`}>
//                     LogIn
//             </Link>
//             <Link to="/SignUp" className={`${MobileNav}px-4 mb-8 text-4xl font-semibold py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all duration-300`}>
//                      SignUp
//             </Link>
//     </div>
//     </>
//   )
// }

// export default Navbar;

import { useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "All Books", link: "/all-books" },
    { title: "Cart", link: "/cart" },
    { title: "Profile", link: "/profile" },
  ];
  const [MobileNav, setMobileNav] = useState("hidden");

  const toggleMobileNav = () => {
    setMobileNav(MobileNav === "hidden" ? "block" : "hidden");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex bg-zinc-800 text-white px-8 py-4 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            className="h-10 me-4"
            src="https://i.pinimg.com/736x/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.jpg"
            alt="logo"
          />
          <h1 className="text-2xl font-semibold">BookStore</h1>
        </Link>
        <div className="hidden md:flex gap-4 items-center">
          {links.map((item, i) => (
            <Link
              to={item.link}
              className="hover:text-blue-500 transition-all duration-300"
              key={i}
            >
              {item.title}
            </Link>
          ))}
          <Link
            to="/LogIn"
            className="px-4 py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            LogIn
          </Link>
          <Link
            to="/SignUp"
            className="px-4 py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            SignUp
          </Link>
        </div>
        <button
          className="block md:hidden text-white text-2xl md:hidden hover:text-zinc-400"
          onClick={toggleMobileNav}
        >
          <FaGripLines />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${MobileNav} bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center md:hidden`}
      >
        {links.map((item, i) => (
          <Link
            to={item.link}
            className="text-white mb-8 text-4xl font-semibold hover:text-blue-500 transition-all duration-300"
            key={i}
            onClick={() => setMobileNav("hidden")} // Close menu on link click
          >
            {item.title}
          </Link>
        ))}
        <Link
          to="/LogIn"
          className="px-4 mb-8 text-4xl font-semibold py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all duration-300"
          onClick={() => setMobileNav("hidden")} // Close menu on link click
        >
          LogIn
        </Link>
        <Link
          to="/SignUp"
          className="px-4 mb-8 text-4xl font-semibold py-2 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition-all duration-300"
          onClick={() => setMobileNav("hidden")} // Close menu on link click
        >
          SignUp
        </Link>
      </div>
    </>
  );
};

export default Navbar;
