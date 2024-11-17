import React from "react";
import LanguageSwitcher from "./LangSwitcher";
import './style.css'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="nav">
          <input type="checkbox" id="nav-check" />
          <Link to="/" className="nav-header">
            <div className="nav-title">Munef</div>
          </Link>
          <div className="nav-btn">
            <div className="switch_lang_mob">
              <LanguageSwitcher />
            </div>
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <nav className="nav-links">
            <a href="/#products">Shirinliklar</a>
            <a href="/#about">Biz haqimizda</a>
            <a href="/#fikrlar">Mijozlar fikri</a>
            <div className="switch_lang_des">
              <LanguageSwitcher />
            </div>
            <Link to="/contact" className="contact-btn">
              Bog'lanish
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
