import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext, loginContect } from "../App";
import logImage from "../images/sign-in-image.jpg";
import { useTranslation } from "react-i18next";
const Login = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const [user, setUser] = useContext(UserContext);
  const {login, setIslogin} = useContext(loginContect);
  function LoginFunc(e) {
    e.preventDefault();

    if (name == user.name && pass == user.pass) {
      navigate("/dashboard");
    } else {
      alert("Username ve ya password yanlisdir");
    }
    // setIslogin(true);
  }
  function RegisterFunc() {
    navigate("/register");
  }
  return (
    <div className="register-box">
      <div className="register">
        <h2>{t("login.loginText")}</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{t("login.username")}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{t("login.password")}</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
          </Form.Group>
          <Link className="btn btn-primary" onClick={LoginFunc}>
            {t("login.loginText")}
          </Link>{" "}
          <br /> <br />
          <button className="reg-link" onClick={RegisterFunc}>
            {t("login.secondLoginText")}
          </button>
        </Form>
      </div>
      <div className="register-image">
        <img src={logImage} alt="" />
      </div>
    </div>
  );
};

export default Login;
