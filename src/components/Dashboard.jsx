import React from "react";
import userImage from "../images/developer.png";
import { useTranslation } from "react-i18next";
const Dashboard = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="dashboard">
      <img src={userImage} alt="" />
      <h1>
        {t("profile.text")} {t("dashboard.text")}!
      </h1>
    </div>
  );
};

export default Dashboard;
