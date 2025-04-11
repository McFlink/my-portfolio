import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home.jsx";
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NNaF5cXmBCekx3TXxbf1x1ZFFMYV9bRXNPIiBoS35Rc0VnWH5fdnVWR2VZV0JzVEBU"
);
import "@syncfusion/ej2-react-popups/styles/material.css";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-react-popups/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css"; // 👈 viktig för knappar
import "@syncfusion/ej2-icons/styles/material.css"; // 👈 detta gör att krysset syns!

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
