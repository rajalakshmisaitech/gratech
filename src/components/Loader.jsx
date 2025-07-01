import React, { useEffect } from "react";
import "../assets/css/Loader.css";

const Loader = () => {
  useEffect(() => {
    function hideLoader() {
      document.getElementById("preloader")?.classList.add("isdone");
      document.querySelector(".loading")?.classList.add("isdone");
    }

    if (window.Pace) {
      window.Pace.on("done", function () {
        console.log("Pace done event fired");
        hideLoader();
      });
    }

    // Fallback: hide loader after 5 seconds no matter what
    const timer = setTimeout(hideLoader, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className="preloader">
      <div className="loading">
        <span className="text-capitalize">L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </div>
      <div className="spinner"></div>
    </div>
  );
};

export default Loader; 