import emailjs from "@emailjs/browser";
import "./ContactMe.css";
import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import MessageDialog from "./MessageDialog";

const ContactModal = () => {
  const form = useRef();
  const [fromName, setFromName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogType, setDialogType] = useState("info"); // "success", "error"

  const onCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  useEffect(() => {}, [fromName, email, subject, message]);

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Captcha token: ", captchaToken);

    if (!captchaToken) {
      setDialogMessage("Please confirm you're not a robot.");
      setDialogType("error");
      setShowDialog(true);
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setDialogMessage("Message sent successfully!");
          setDialogType("success");
          setShowDialog(true);
          setFromName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          setDialogMessage(
            "Something went wrong sending the message. Try again. Id the error persists, contact me directly at mikael.chris.flink@gmail.com."
          );
          setDialogType("error");
          setShowDialog(true);
        }
      );
  };

  return (
    <>
      <div className="contact-modal-content">
        <h2>Let's talk!</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="from_name">Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={fromName}
              onChange={(e) => setFromName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              required
            ></textarea>
          </div>
          <div className="recaptcha-container">
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={onCaptchaChange}
            />
          </div>
          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
        <MessageDialog
          visible={showDialog}
          message={dialogMessage}
          onClose={() => setShowDialog(false)}
          type={dialogType}
        />
      </div>
    </>
  );
};

export default ContactModal;
