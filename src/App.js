import { Nav } from "./components/Nav";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
export default App;
