import DateTimeDisplay from "../utils/navbar-date";

export const NavbarSection = () => {
  return (
    <nav>
      <div className="flex items-center justify-between w-full py-6">
        <div className="navbar-start">
          <DateTimeDisplay />
        </div>
        <div className="navbar-center">
          <a href="/" className="flex-1">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              KnowYourTrade
            </span>
          </a>
        </div>
        <div className="flex navbar-end">
          <div className="dropdown dropdown-hover dropdown-end">
            <button
              tabIndex={0}
              className="bg-transparent border-opacity-0 btn shadow-transparent hover:shadow-md hover:bg-transparent hover:border-opacity-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52"
            >
              <li>
                <a href="/">Item 1</a>
              </li>
              <li>
                <a href="/">Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
