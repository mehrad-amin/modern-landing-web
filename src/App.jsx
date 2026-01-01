import { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import Ourwork from "./components/Ourwork";
import Teams from "./components/Teams";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  return (
    <div className="dark:bg-black relative">
      <NavBar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <Ourwork />
      <Teams />
      <ContactUs />
      <Toaster />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
