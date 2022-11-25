import Dropdown from "../dropdown/dropdown.component";
import Header from "../header/header.component";

const Layout = (props) => {
  return (
    <div className="relative overflow-scroll h-full w-full">
      <Header />
      <Dropdown />
      {props.children}
    </div>
  );
};

export default Layout;
