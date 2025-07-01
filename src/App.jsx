import React, { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import Loader from "./components/Loader";
import "pace-js";
import "pace-js/themes/blue/pace-theme-flash.css";

function App() {
  return (
    <>
      <Loader />
      <MainLayout />
    </>
  );
}

export default App;
