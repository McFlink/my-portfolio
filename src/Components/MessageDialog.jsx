import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { useEffect } from "react";
import "./MessageDialog.css";

const MessageDialog = ({ visible, message, onClose, type = "info" }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <DialogComponent
      visible={visible}
      header={type === "success" ? "Success" : "Oops!"}
      showCloseIcon={true}
      isModal={true}
      close={onClose}
      width="400px"
      content={message}
      cssClass={type}
      animationSettings={{ effect: "FadeZoom", duration: 300 }}
      target="body"
    />
  );
};

export default MessageDialog;
