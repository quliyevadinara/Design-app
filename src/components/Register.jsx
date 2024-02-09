import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { UserContext } from "../App";
import regImage from "../images/signup-image.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  function SumbitFunc(e) {
    e.preventDefault();
    navigate("/login");
    localStorage.setItem("user", JSON.stringify(user));
  }
  function LoginFunc() {
    navigate("/login");
  }

  return (
    <div className="register-box">
      {" "}
      <div className="register">
        <h2>{t("register.registerText")}</h2>
        <Form onSubmit={SumbitFunc}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{t("login.username")}</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUser( {...user, name: e.target.value} )}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{t("register.email")}</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter username"
              onChange={(e) => setUser({ ...user, mail: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>{t("login.password")}</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setUser( { ...user, pass: e.target.value })}
            />
          </Form.Group>
          <Link className="btn btn-primary" onClick={SumbitFunc}> 
          {t("register.registerText")}
          </Link>{" "}
          <br /> <br />
          <button className="log-link" onClick={LoginFunc}>
          {t("register.secondRegText")}
          </button>
        </Form>
      </div>
      <div className="register-image">
        <img src={regImage} alt="" />
      </div>
    </div>
  );
};

export default Register;
