import React from "react";
import image1 from "../images/image-1.jpg";
import image2 from "../images/image-2.jpg";
import image3 from "../images/image-3.jpg";
import image4 from "../images/image-4.jpg";
import image5 from "../images/image-5.jpg";
import image6 from "../images/image-6.jpg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="home">
      <div className="home-page">
        <div className="home-text">
          <h1>{t("home.hometext")}</h1>
          <p>
            Habitant morbi tristique senectus et. Nec dui nunc mattis enim ut
            tellus. Semper auctor neque vitae tempus quam pellentesque nec nam
            aliquam.Semper auctor neque vitae tempus quam pellentesque nec nam
            aliquam.{" "}
          </p>
          <button>{t("home.button")}</button>
        </div>
      </div>
      <div className="orange">
        <h1>{t("home.projecttext")}</h1>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>
      <div className="product-image">
        <div className="images">
          <img src={image1} alt="" />

          <img src={image2} alt="" />

          <img src={image3} alt="" />
        </div>
        <div className="images">
          <img src={image4} alt="" />

          <img src={image5} alt="" />

          <img src={image6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
