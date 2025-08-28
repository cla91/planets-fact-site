import { useContext, useEffect, useRef, useState } from "react";
import PlanetContext from "../context/planetContext";
import NavbarLink from "./NavbarLink";
import hamburgerIcon from "./../assets/images/icon-hamburger.svg";
import { CSSTransition } from "react-transition-group";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const nodeRef = useRef(null);
  const planets = useContext(PlanetContext);
  const planetsNames = planets.map((planet) => planet.name);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 48rem)");
    const handleResize = (e) => {
      if (e.matches) setShowMenu(false);
    };
    mediaQuery.addEventListener("change", handleResize);
    //initial check
    if (mediaQuery.matches) {
      setShowMenu(false);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);
  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showMenu]);

  return (
    <nav className="navbar">
      <button
        className={`hamburgerIcon ${showMenu && "showMenu"}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <img src={hamburgerIcon} alt="hamburger icon" />
      </button>
      {/* mobile menu */}
      <CSSTransition
        nodeRef={nodeRef}
        in={showMenu}
        timeout={300}
        classNames="menu-mobile"
        unmountOnExit
      >
        <ul className="menu-mobile" ref={nodeRef}>
          {planetsNames.map((planetName) => (
            <NavbarLink
              link={planetName}
              key={planetName}
              mobile
              setShowMenu={setShowMenu}
            />
          ))}
        </ul>
      </CSSTransition>

      {/* desktop menu */}
      <ul className="menu">
        {planetsNames.map((planetName) => (
          <NavbarLink link={planetName} key={planetName} />
        ))}
      </ul>
    </nav>
  );
}
