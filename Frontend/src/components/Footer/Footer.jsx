// import React from 'react'

// const Footer = () => {
//   return (
//     <div className="bg-zinc-800 text-white px-8 py-4">
//         <h1 className="text-2xl font-semibold text-center"> Welcome to Bookstore!</h1>
//     </div>
//   )
// }

// export default Footer;

// Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white px-8 py-4">
      <h1 className="text-2xl font-semibold text-center">
        Welcome to Bookstore!
      </h1>
      <div className="mt-4 flex justify-center gap-4">
        <a href="/privacy" className="hover:text-blue-500 transition-all duration-300">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:text-blue-500 transition-all duration-300">
          Terms of Service
        </a>
        <a href="/contact" className="hover:text-blue-500 transition-all duration-300">
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;

