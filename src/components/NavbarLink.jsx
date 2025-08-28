import { NavLink } from "react-router-dom";
import chevronIcon from "./../assets/images/icon-chevron.svg";

export default function NavbarLink({ link, mobile, setShowMenu }) {
  const linkTo = link.toLowerCase();

  if (mobile) {
    return (
      <li>
        <span className={`dot ${linkTo !== "mercury" ? linkTo : ""}`}></span>
        <NavLink
          onClick={() => setShowMenu(false)}
          to={linkTo === "mercury" ? `/` : `/${linkTo}`}
        >
          {link}
        </NavLink>
        <img src={chevronIcon} alt="" />
      </li>
    );
  }
  return (
    <li>
      <NavLink to={linkTo === "mercury" ? `/` : `/${linkTo}`}>{link}</NavLink>
    </li>
  );
}
