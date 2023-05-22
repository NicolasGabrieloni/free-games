import "./nav.css";
import { Outlet, NavLink } from "react-router-dom";

function Nav() {
 

  return (
    <div className="navContainer">
      <h1>FREE GAMES</h1>
      <p className="credits">
        Developed
        <br /> by
        <br />
        <a href="https://nicolasgabrieloni.netlify.app/">
          Nicolas
          <br />
          Gabrieloni
        </a>
      </p>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/shooters"
              className={({ isActive }) => (isActive ? "active" : "noActive")}
            >
              Shooters
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mmo"
              className={({ isActive }) => (isActive ? "active" : "noActive")}
            >
              MMO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mmorpg"
              className={({ isActive }) => (isActive ? "active" : "noActive")}
            >
              MMORPG
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to="/"
              className={({ isActive }) => (isActive ? "active" : "noActive")}
            >
              All games
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/strategy"
              className={({ isActive }) => (isActive ? "active" : "noActive")}
            >
              Strategy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sports"
              className={({ isActive }) => (isActive ? "active" : "noActive")}
            >
              Sports
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/racing"
              className={({ isActive }) => (isActive ? "active" : "noActive")}
            >
              Racing
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export { Nav };
