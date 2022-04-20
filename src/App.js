import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

//import des routes
import PrivateRoutes from "./Routes/routes";
//import des pages
// import Navbar from "./components/navbar/Navbar";
import Navigation from "./components/navbar/Navbar";

import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Navigation />
        <PrivateRoutes />
      </Router>

      <Footer />
    </div>
  );
}

export default App;
