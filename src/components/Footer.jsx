import React, { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const inputRef=useRef();
  // useEffect(()=>{
  //   inputRef.current.focus()
  // },[])
  const { t, i18n } = useTranslation();
  return (
    <div className="footer-page">
      <div className="contacts">
        <div className="contact">
          <h1>{t("footer.contactText")}</h1>
          <p>
          {t("footer.secondText")} <br />
            <br />
            {t("footer.thirdText")}
          </p>
        </div>
        <div className="sign-up">
          <h2>{t("footer.signupText")}</h2>
          <p>
          {t("footer.secondSignupText")}
          </p>
          <input type="email" placeholder="Enter a valid email address" ref={inputRef}/>
          <button>{t("footer.button")}</button>
        </div>
      </div>
      <div className="location-phone">
        <div className="location-page">
          <FaLocationDot />
          <h4>{t("footer.locationText")}</h4>
          <p>
          {t("footer.secondLocationText")}
          </p>
        </div>
        <div className="phone">
          <BsFillTelephoneFill />
          <h4>{t("footer. phoneText")}</h4>
          <p>
            + 912 3 567 8987 <br />+ 912 5 252 3336
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
