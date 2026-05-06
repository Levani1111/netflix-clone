import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav({ activeSection, sections, onSectionChange }) {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__left">
        <div className="nav__brand" aria-label="Netflix Clone">
          <span className="nav__brand-main">Netflix</span>
          <span className="nav__brand-tag">Clone</span>
        </div>
        <nav className="nav__links" aria-label="Main navigation">
          {Object.entries(sections).map(([sectionKey, section]) => (
            <button
              key={sectionKey}
              className={`nav__link ${
                activeSection === sectionKey ? "nav__link--active" : ""
              }`}
              type="button"
              onClick={() => onSectionChange(sectionKey)}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="nav__right">
        <span className="nav__disclaimer">Portfolio clone</span>
        <div className="nav__avatar" aria-label="Profile">
          N
        </div>
      </div>
    </div>
  );
}

export default Nav;
