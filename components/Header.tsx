"use client";

import CustomFont from "next/font/local";
const customFont1 = CustomFont({
  src: "../public/grotesque-font/RG-SpaciousBook.ttf",
});

function Header() {
  const closeDrawer = () => document?.getElementById("drawer")?.click();

  return (
    <header
      className="w-full bg-dark py-2 fixed top-0 z-50"
      style={customFont1.style}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="hover:text-gray-300">
          <img src="favicon.ico" alt="Favicon" />
        </a>
        <div className="flex items-center gap-x-3">
          <nav className="hidden md:flex text-main text-lg font-light mr-6">
            <ul className="flex space-x-10">
              <li>
                <a href="#about" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-gray-300">
                  How it works
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-gray-300">
                  Roadmap
                </a>
              </li>
              <li>
                <a
                  href="http://lucky-pixel.vercel.app/"
                  className="hover:text-gray-300"
                >
                  VISIT
                </a>
              </li>
            </ul>
          </nav>
          <button className="block md:hidden">
            <div className="drawer drawer-end">
              <input id="drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="drawer">
                  <img src="sidebar_button.png" alt="Favicon" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <nav className="menu p-4 py-10 w-60 min-h-full bg-dark text-main text-[20px]">
                  <ul className="flex flex-col gap-10">
                    <li>
                      <a
                        href="#about"
                        className="hover:text-gray-300"
                        onClick={closeDrawer}
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#how-it-works"
                        className="hover:text-gray-300"
                        onClick={closeDrawer}
                      >
                        How it works
                      </a>
                    </li>
                    <li>
                      <a
                        href="#roadmap"
                        className="hover:text-gray-300"
                        onClick={closeDrawer}
                      >
                        Roadmap
                      </a>
                    </li>

                    <li>
                      <a
                        href="http://lucky-pixel.vercel.app/"
                        className="hover:text-gray-300"
                        onClick={closeDrawer}
                      >
                        VISIT
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
