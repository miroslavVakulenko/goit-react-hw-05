import { NavLink } from "react-router-dom";
// import css from "./Navigation.module.css";
// import clsx from "clsx";

// function getNavLinkClass({ isActive }) {
//   return clsx(css.link, isActive && css.active);
// }

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" >
        Home
      </NavLink>
      <NavLink to="/payments">
        Payments
      </NavLink>
    </nav>
  );
}