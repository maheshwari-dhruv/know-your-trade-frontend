const Navbar = () => {
  return (
    <nav className="bg-[url('https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between w-full px-8 py-4 mt-16 bg-white mx-28 rounded-t-2xl">
          <div className="blog-header">
            <span className="text-2xl font-bold text-black">KnowYourTrade</span>
          </div>
          <div className="nav-items">
            <ul className="flex items-center text-base">
              <li className="py-6 pr-6 hover:text-black">
                <a href="/indicators">
                  <span>Indicators</span>
                </a>
              </li>
              <li className="p-6 hover:text-black">
                <a href="/stocks">
                  <span>Stocks</span>
                </a>
              </li>
              <li className="p-6 hover:text-black">
                <a href="/news">
                  <span>News</span>
                </a>
              </li>
              <li className="p-6 hover:text-black">
                <a href="/about">
                  <span>About</span>
                </a>
              </li>
              <li className="py-6 pl-6 hover:text-black">
                <a href="/contact">
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
