import React, { useState } from 'react';
import '../style/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [emailError, setEmailError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEmailBlur = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };
  
    return (
      <div className="contact">
        <h4>Contact</h4>
        <nav className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {formData.name === '' && <span className="error">This field is required</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleEmailBlur}
                required
              />
              {/* Show email validation message */}
              {formData.email === '' && <span className="error">This field is required</span>}
              {emailError && <span className="error">{emailError}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              {formData.message === '' && <span className="error">This field is required</span>}
            </div>
            <button type="submit">Submit</button>
          </form>
        </nav>
      </div>
    );
  };

export default Contact;