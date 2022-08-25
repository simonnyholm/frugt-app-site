import { Link, Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
