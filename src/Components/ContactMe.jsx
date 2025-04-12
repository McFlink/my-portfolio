import emailjs from "@emailjs/browser";
import "./ContactMe.css";
import { useRef } from "react";

const ContactModal = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("submit event:", e);

    emailjs
      .sendForm(
        "service_5ivq2dv",
        "template_3upn26s",
        form.current,
        "13ZrOJrJfq_-MT-Y8"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Meddelandet har skickats!");
        },
        (error) => {
          console.log(error.text);
          alert("Något gick fel. Försök igen.");
        }
      );
  };

  return (
    <>
      <div className="contact-modal-content">
        <h2>Kontakta mig</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="from_name">Namn</label>
            <input type="text" id="from_name" name="from_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-post</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Ämne</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Meddelande</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Skicka
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactModal;
