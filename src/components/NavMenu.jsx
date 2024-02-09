import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LuMoon } from "react-icons/lu";
import { LuSunMoon } from "react-icons/lu";
import { ModeContext, loginContect } from "../App";
const NavMenu = () => {
  const {login, setIslogin} = useContext(loginContect);
  const { theme, setTheme } = useContext(ModeContext);
  const handleChangeThem = (mode) => {
    setTheme(mode);
    localStorage.setItem("theme", mode);
  };

  const { t, i18n } = useTranslation();
  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Link to="/" className="navbar-brand">
            Logo
          </Link>
          <Nav className=" justify-content-flex-end">
            <Link to="/" className="nav-link">
              {t("navbar.home")}
            </Link>
            <Link to="/about" className="nav-link">
              {t("navbar.about")}
            </Link>
            <Link to="/blogs" className="nav-link">
              {t("navbar.blogs")}
            </Link>
           {!login ? <Link to="/login" className="nav-link">
              {t("navbar.login")}
            </Link>:""} 
           {!login ?<Link to="/register" className="nav-link">
              {t("navbar.register")}
            </Link>:""} 
            <Link to="/profile" className="nav-link">
              {t("navbar.profile")}
            </Link>
            <Link className="nav-link">
              <button
                onClick={() => {
                  handleChangeLang("en");
                }}
              >
                En
              </button>
              <button
                onClick={() => {
                  handleChangeLang("az");
                }}
              >
                Az
              </button>

              <button onClick={() => handleChangeThem("dark")}>
                <LuMoon />
              </button>
              <button onClick={() => handleChangeThem("light")}>
                <LuSunMoon />
              </button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavMenu;
