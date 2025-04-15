import React from "react";
import { registerLicense } from "@syncfusion/ej2-base";

registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE_KEY);

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home.jsx";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-react-popups/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-icons/styles/material.css";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
