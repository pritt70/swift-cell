import React, { useState } from 'react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="box-border flex justify-between items-center w-full bg-white m-0 px-40 py-4 border-b-[#B5B5B5] border-b border-solid max-md:px-10 max-md:py-4 max-sm:flex-wrap max-sm:gap-4 max-sm:px-5 max-sm:py-4">
      {/* Logo */}
      <div className="box-border flex flex-col items-center gap-2.5 bg-white m-0 p-0">
        <div className="text-2xl font-bold text-black">
          SwiftCell
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="box-border flex w-[372px] h-14 items-center gap-2 bg-neutral-100 m-0 p-4 rounded-lg max-md:w-[300px] max-sm:w-full max-sm:order-3 max-sm:basis-full">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"25\" height=\"24\" viewBox=\"0 0 25 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"search-icon\" style=\"box-sizing: border-box; margin: 0; padding: 0; width: 24px; height: 24px; flex-shrink: 0\"> <path d=\"M20.5997 20L16.822 16.2156M18.9155 11.1579C18.9155 13.0563 18.1614 14.8769 16.819 16.2193C15.4767 17.5617 13.656 18.3158 11.7576 18.3158C9.85923 18.3158 8.0386 17.5617 6.69623 16.2193C5.35386 14.8769 4.59973 13.0563 4.59973 11.1579C4.59973 9.2595 5.35386 7.43886 6.69623 6.0965C8.0386 4.75413 9.85923 4 11.7576 4C13.656 4 15.4767 4.75413 16.819 6.0965C18.1614 7.43886 18.9155 9.2595 18.9155 11.1579V11.1579Z\" stroke=\"#989898\" stroke-width=\"1.5\" stroke-linecap=\"round\"></path> </svg>",
            }}
          />
        </div>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="box-border text-[#656565] text-sm font-medium leading-[18px] bg-transparent border-none outline-none flex-1 m-0 p-0"
        />
      </div>
      
      {/* Navigation */}
      <nav className="box-border flex items-start gap-[52px] m-0 p-0 max-md:gap-8 max-sm:hidden">
        <a href="#" className="box-border text-black text-base font-medium cursor-pointer m-0 p-0 hover:text-gray-600">
          Home
        </a>
        <a href="#" className="box-border text-black text-base font-medium cursor-pointer m-0 p-0 hover:text-gray-600">
          About
        </a>
        <a href="#" className="box-border text-black text-base font-medium cursor-pointer m-0 p-0 hover:text-gray-600">
          Contact Us
        </a>
        <a href="#" className="box-border text-black text-base font-medium cursor-pointer m-0 p-0 hover:text-gray-600">
          Blog
        </a>
      </nav>
      
      {/* Mobile Menu Button */}
      <button 
        className="box-border hidden text-2xl text-black cursor-pointer m-0 p-0 max-sm:block"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <i className="ti ti-menu-2 box-border m-0 p-0" />
      </button>
      
      {/* Icons */}
      <div className="box-border flex justify-center items-center gap-6 m-0 p-0">
        <button className="hover:opacity-70">
          {/* Favorites icon */}
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"favorites-icon\" style=\"box-sizing: border-box; margin: 0; padding: 0; width: 32px; height: 32px\"> <path d=\"M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
            }}
          />
        </button>
        <button className="box-border flex w-8 h-8 justify-center items-center relative bg-white m-0 p-0 hover:opacity-70">
          {/* Cart icon */}
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"cart-svg\" style=\"box-sizing: border-box; margin: 0; padding: 0; width: 32px; height: 32px; flex-shrink: 0\"> <path d=\"M3 5H7L10 22H26M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97372 27.8239 6.90679 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66662 27.39 6.66667H8M12 26C12 26.5523 11.5523 27 11 27C10.4477 27 10 26.5523 10 26C10 25.4477 10.4477 25 11 25C11.5523 25 12 25.4477 12 26ZM26 26C26 26.5523 25.5523 27 25 27C24.4477 27 24 26.5523 24 26C24 25.4477 24.4477 25 25 25C25.5523 25 26 25.4477 26 26Z\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
            }}
          />
        </button>
        <button className="hover:opacity-70">
          {/* User icon */}
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"user-icon\" style=\"box-sizing: border-box; margin: 0; padding: 0; width: 32px; height: 32px\"> <path d=\"M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27M21 9.5C21 11.9853 18.9853 14 16.5 14C14.0147 14 12 11.9853 12 9.5C12 7.01472 14.0147 5 16.5 5C18.9853 5 21 7.01472 21 9.5Z\" stroke=\"black\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>",
            }}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;