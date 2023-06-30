import { Outlet, NavLink, ScrollRestoration } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ScrollRestoration />
      <header>
        <div className="container">
          <NavLink to="/">
            <h1>Workout Buddy</h1>
          </NavLink>
        </div>
      </header>

      <div className="pages">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
