import { DialogComponent } from "@syncfusion/ej2-react-popups";

import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./ContactModal.css";

const ContactModal = ({ isOpen, onClose }) => {
  const form = useRef();

  useEffect(() => {
    window.addEventListener("submit", (e) => {
      console.log("GLOBAL SUBMIT CAUGHT");
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Körs denna?");

    emailjs
      .sendForm(
        "service_5ivq2dv",
        "template_3upn26s",
        form.current,
        "13ZrOJrJfq_-MT-Y8"
      )
      .then(() => {
        alert("Message sent!");
        console.log("Success");
        onClose();
      })
      .catch((error) => {
        alert("Something went wrong... check console");
        console.log("EmailJS ERROR:", error);
      });
  };

  return (
    <>
      {isOpen && (
        <DialogComponent
          visible={isOpen}
          showCloseIcon={true}
          isModal={true}
          close={onClose}
          width="500px"
          animationSettings={{ effect: "FadeIn", duration: 1000 }}
          target={"body"}
          position={{ X: "center", Y: "center" }}
          onSubmit={() => console.log("Dialog submit triggered")}
        >
          {console.log("RENDERING MODAL")}

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Your name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea
              name="message"
              placeholder="Your message..."
              rows="5"
              required
            />
            <button
              type="submit"
              onClick={() => console.log("Knappen klickad")}
            >
              Send
            </button>
          </form>
        </DialogComponent>
      )}
    </>
  );
};

export default ContactModal;
