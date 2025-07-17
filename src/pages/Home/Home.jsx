import React, { useContext } from 'react';
import Slider from '../../components/Slider/Slider';
import './Home.css';
import logo1 from '../../assets/logo1.png';
import logo3 from '../../assets/logo3.png';
import { ThemeContext } from '../../components/ThemeContext/ThemeContext';
import { useTranslation } from "react-i18next";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const logo = theme === 'dark' ? logo3 : logo1;
  const { t } = useTranslation();

  return (
    <div className={`home ${theme === 'dark' ? 'home--dark' : ''}`}>
      <img src={logo} alt="logo" className="home__logo" />
      <Slider />

      <div className="home__container">
        <h1>{t("home.title")}</h1>
        <p>{t("home.intro")}</p>

        <ul className="home__list">
          <li>{t("home.point1")}</li>
          <li>{t("home.point2")}</li>
          <li>{t("home.point3")}</li>
          <li>{t("home.point4")}</li>
        </ul>

        <p>{t("home.closing")}</p>
      </div>
    </div>
  );
};

export default Home;
