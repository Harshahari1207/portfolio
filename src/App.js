import { Nav } from "./components/Nav";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
