import React from "react";
import TemplateOneContext from "./context/templateOneContext";
import Home from "./Home";

function App() {
  return (
    <TemplateOneContext>
      <Home />
    </TemplateOneContext>
  );
}

export default App;
