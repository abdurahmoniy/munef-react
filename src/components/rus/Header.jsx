import React from "react";
import LanguageSwitcher from "./LangSwitcher";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="nav">
          <input type="checkbox" id="nav-check" />
          <Link to="/rus" className="nav-header">
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
            <a href="/rus/#products">Сладости</a>
            <a href="/rus/#about">О нас</a>
            <a href="/rus/#fikrlar">Мнение клиента</a>
            <div className="switch_lang_des">
              <LanguageSwitcher />
            </div>
            <Link to="/rus/contact" className="contact-btn">
            Контакт
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
