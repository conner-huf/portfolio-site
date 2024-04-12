import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { Main } from "./Components/Main/Main";
import { Hero } from "./Components/Hero/Hero";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./Components/About/About";
import { ProjectDisplay } from "./Components/ProjectDisplay/ProjectDisplay";
import { ResumePage } from "./Components/ResumePage/ResumePage";

import './App.css';


function App() {
  return (
    <Router>
      <Navbar />

        <Switch>
          <Route exact path="/portfolio-site/">
            <Hero />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <ProjectDisplay />
          </Route>
          <Route path="/resume">
            <ResumePage />
          </Route>
        </Switch>
        <Footer />

    </Router>
  );
}

export default App;
