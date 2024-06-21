"use client";

import React from "react";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 1000);
    return false;
  };
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <section>
        <p>
          Vous pouvez nous contacter à l'adresse suivante:
          <br />
          123 Main St.
          <br />
          City, State 12345
          <br />
          Tel: 123-456-7890
          <br />
          Fax: 123-456-7890
          <br />
          Email: 123-456-7890@example.com
        </p>
      </section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {isSubmitted && (
        <div className="popup-message">
          <div className="popup-content">
            <p>Merci pour votre commande !</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
