function Header() {
  return (
    <header className="w-full bg-dark py-2 fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="hover:text-gray-300">
          <img src="favicon.ico" alt="Favicon" />
        </a>
        <div className="flex items-center gap-x-3">
          <nav className="text-main text-lg font-light flex mr-6">
            <ul className="flex space-x-10">
              <li>
                <a href="#2nd" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#3rd" className="hover:text-gray-300">
                  How it works
                </a>
              </li>
              <li>
                <a href="#4th" className="hover:text-gray-300">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#5th" className="hover:text-gray-300">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          <button>
            <img src="sidebar_button.png" alt="Favicon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
