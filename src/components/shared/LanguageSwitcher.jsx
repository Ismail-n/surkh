import { useState, useEffect } from "react";
import i18n from "../../../i18n";
import Image from "next/image";


const languages = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "nl", label: "NL" },
];

export default function LanguageSwitcher() {
  const [lang, setLang] = useState(i18n.language || "en");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang && storedLang !== lang) {
      i18n.changeLanguage(storedLang);
      setLang(storedLang);
    }
  }, []);

  const changeLanguage = (lng) => {
    console.log(lang , lng);
    if (lng === lang) return;
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setLang(lng);
    setShowDropdown(false);
  };

  return (
    <div className="language-switcher">
      <button
        className={`language_btn ${lang === "en" ? "jf_font" : "adam_font"} ${showDropdown ? "open" : ""}`}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {languages.find((l) => l.code === lang)?.label}
        <Image
          src="/images/icons/languageSwitcherArrow.svg"
          width={18}
          alt="language switcher arrow"
          height={9}
        />
      </button>

      {showDropdown && (
        <ul className="language-dropdown">
          {languages
            .filter((l) => l.code !== lang)
            .map((l) => (
              <li key={l.code} onClick={() => changeLanguage(l.code)}>
                {l.label}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
