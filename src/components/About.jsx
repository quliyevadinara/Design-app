import React from "react";
import image7 from "../images/image-7.jpg";
import image8 from "../images/image-8.jpg";
import image9 from "../images/image-9.jpg";
import image10 from "../images/image-10.jpg";
import image11 from "../images/image-11.jpg";
import image12 from "../images/image-12.jpg";
import { useTranslation } from "react-i18next";
const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="about">
      <h1>{t("about.aboutText")}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="designs">
        <div className="design">
          <div className="design-image">
            <img src={image7} alt="" />
            <h5>{t("about.aboutText")}</h5>
            <p>{t("about.aboutText")}</p>
          </div>
          <div className="design-image">
            <img src={image8} alt="" />
            <h5>{t("about.imageText2")}</h5>
            <p>{t("about.aboutText")}</p>
          </div>
          <div className="design-image">
            <img src={image9} alt="" />
            <h5>{t("about.imageText3")}</h5>
            <p>{t("about.aboutText")}</p>
          </div>
          <div className="design-image">
            <img src={image10} alt="" />
            <h5>{t("about.imageText4")}</h5>
            <p>{t("about.aboutText")}</p>
          </div>
        </div>
        <div className="design">
          <div className="design-image">
            <img src={image11} alt="" />
            <h5>{t("about.imageText5")}</h5>
            <p>{t("about.aboutText")}</p>
          </div>
          <div className="design-image">
            <img src={image12} alt="" />
            <h5>{t("about.imageText6")}</h5>
            <p>{t("about.aboutText")}</p>
          </div>
          <div className="design-image">
            <img
              src="https://assets.nicepagecdn.com/d2cc3eaa/88834/images/jhjhj6.jpg"
              alt=""
            />
            <h5>{t("about.imageText7")}</h5>
            <p>{t("about.aboutText")}</p>
          </div>
          <div className="design-image">
            <img
              src="https://assets.nicepagecdn.com/d2cc3eaa/88834/images/trtrt.jpg"
              alt=""
            />
            <h5>{t("about.imageText8")}</h5>
            <p>{t("about.aboutText")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
