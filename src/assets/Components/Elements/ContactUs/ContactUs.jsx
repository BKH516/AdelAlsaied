import React, { useState } from 'react';
import './ContactUs.css';

const ContactForm = () => {
  const [countryCode, setCountryCode] = useState('+966');
  const [phone, setPhone] = useState('');

  const handleCountryChange = (e) => {
    const code = e.target.value;
    setCountryCode(code);
    if (!phone || phone.startsWith('+')) {
      setPhone(code + ' ');
    }
  };

  const handlePhoneChange = (e) => setPhone(e.target.value);

  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <h2 className="form-title">Get in Touch</h2>
        <p className="form-subtitle">We’d love to hear from you! Fill out the form below.</p>
        <form className="contact-form" action="https://formspree.io/f/mdkgbyvv" method="POST">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">First Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" name="lastname" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group phone-group">
            <label>Phone Number</label>
            <div className="phone-input-wrapper">
              <select value={countryCode} onChange={handleCountryChange}>
                <option value="+966">🇸🇦 +966</option>
                <option value="+971">🇦🇪 +971</option>
                <option value="+965">🇰🇼 +965</option>
                <option value="+974">🇶🇦 +974</option>
                <option value="+968">🇴🇲 +968</option>
                <option value="+964">🇮🇶 +964</option>
                <option value="+962">🇯🇴 +962</option>
                <option value="+961">🇱🇧 +961</option>
                <option value="+963">🇸🇾 +963</option>
                <option value="+212">🇲🇦 +212</option>
                <option value="+216">🇹🇳 +216</option>
                <option value="+218">🇱🇾 +218</option>
                <option value="+20">🇪🇬 +20</option>
                <option value="+249">🇸🇩 +249</option>
                <option value="+222">🇲🇷 +222</option>
                <option value="+213">🇩🇿 +213</option>
              </select>
              <input type="tel" id="phone" name="phone" value={phone} onChange={handlePhoneChange} required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
