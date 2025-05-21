import React, { useState } from "react";
import "./Footer.css";
import ContactUs from "../Elements/ContactUs/ContactUs";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const [showContact, setShowContact] = useState(false);
  const openContact = () => setShowContact(true);
  const closeContact = () => setShowContact(false);

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          {/* Stay Connected Button */}
          <div className="footer__section">
            <h2 className="footer__title">Stay Connected</h2>
            <button className="footer__action-btn" onClick={openContact}>
              Click to connect
            </button>
          </div>

          {/* Contact Info (kept as previous) */}
          <div className="footer__section">
            <h2 className="footer__title">To communicate</h2>
            <div className="footer__title-p">
              <p>Location: Syria, Aleppo</p>
              <p>
                Email:{" "}
                <a href="mailto:adelalsaied2001@gmail.com">
                  adelalsaied2001@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="footer__section">
            <h2 className="footer__title">Follow Us</h2>
            <div className="footer__socials">
              <a href="https://www.facebook.com/share/12Mi3dCHHZm/">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/adel_alsaied?igsh=MTRleXJpMThqNzF4Mg==">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/adel-alsaied-03a818274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedinIn />
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Popup Modal */}
      {showContact && (
        <div className="modal-overlay" onClick={closeContact}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeContact}>
              &times;
            </button>
            <ContactUs />
          </div>
        </div>
      )}
    </>
  );
}
