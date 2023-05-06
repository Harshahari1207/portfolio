import { Nav } from "./components/Nav";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import Skills from "./components/Skills";
import "./App.css";
import Footer from "./components/Footer";

import { NavLinksAfter } from "./components/NavLinksAfter";

function App() {
  return (
    <div className="App">
      <Nav />
      <NavLinksAfter/>
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      
    </div>
  );
}
export default App;
