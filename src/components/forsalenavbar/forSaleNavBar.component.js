import Sortbydropdown from "../sortbydropdown/sortbydropdown.component";

const ForSaleNavBar = () => {
  return (
    <header className="w-full">
      <nav className="border-gray-500">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center lg:order-2">
            <div className="font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
              <Sortbydropdown />
            </div>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex justify-center items-center text-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <div
                  className="block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:p-0 text-3xl m-5"
                  aria-current="page"
                >
                  For Sale
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default ForSaleNavBar;
