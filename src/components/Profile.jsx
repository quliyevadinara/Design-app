import React, { useContext } from "react";
import { UserContext, loginContect } from "../App";
import { useNavigate } from "react-router-dom";
import image3 from "../images/image-3.png";
import { useTranslation } from "react-i18next";
const Profile = () => {
  const { login, setIslogin } = useContext(loginContect);
  const { t, i18n } = useTranslation();
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();
  function ProfilePage() {
    navigate("/");
    setIslogin(false);
  }
  return (
    <div className="profile-page">
      <img className="profile-image" src={image3} alt="" /> <br />
      <h2>{t("profile.text") + " " + user.name}!</h2> <br />
      <button onClick={ProfilePage}>{t("profile.button")}</button>
    </div>
  );
};

export default Profile;
