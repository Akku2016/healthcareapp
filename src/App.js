import Top from "./components/topbar/Topbar";
 
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Services from "./components/Services/Services";
import Doctors from "./components/doctors/Doctors";
import Appointment from "./components/appointment/Appointment";
import Contact from "./components/contact/Contact";
 
 

function App() {
  const [menuOpen, setMenuOpen]  = useState(false)
  return (

    <div className="app">
    <Top menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <Intro/>
     <About/>
      <Services/>
      <Doctors/>
      <Appointment/>
      <Contact/>
    </div>
   </div>
  );
}

export default App;
