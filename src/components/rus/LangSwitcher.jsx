import React, { useState, useEffect } from 'react';
import uzflag from '../img/uzbflag.png';
import rusflag from '../img/rusflag.png';
import { Link, useLocation } from 'react-router-dom';

function LanguageSwitcher() {
  const location = useLocation();
  const [languageOptionsVisible, setLanguageOptionsVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    flagImage: rusflag,
    languageText: 'Rus'
  });

  const toggleLanguageOptions = (lang) => {
    if (languageOptionsVisible === lang) {
      setLanguageOptionsVisible(null);
    } else {
      setLanguageOptionsVisible(lang);
    }
  };

  const changeLanguage = (flagImage, languageText) => {
    setSelectedLanguage({ flagImage, languageText });
    setLanguageOptionsVisible(null);
  };

  return (
    <div className='switch_lang'>
      <div
        className='selected_lang'
        id="selected_lang"
        onClick={() => toggleLanguageOptions('languageOptions')}
        style={{ cursor: 'pointer' }}
      >
        <img src={`${selectedLanguage.flagImage}`} alt="" />
        {selectedLanguage.languageText}
      </div>
      {languageOptionsVisible === 'languageOptions' && (
        <div className='languageOptions' id="languageOptions">
          <Link to="/" className='sl1' onClick={() => changeLanguage(uzflag, 'Uzb')}>
            <img src={uzflag} alt="" />
            Uzb
          </Link>
          <Link to="/rus" className='sl2' onClick={() => changeLanguage(rusflag, 'Rus')}>
            <img src={rusflag} alt="" />
            Rus
          </Link>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
