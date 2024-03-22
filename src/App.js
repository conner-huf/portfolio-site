import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { Main } from "./Components/Main/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./Components/About/About";
import { ProjectDisplay } from "./Components/ProjectDisplay/ProjectDisplay";

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />

        <Switch>
          <Route exact path="/portfolio-site/">
            <Main />
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
        </Switch>
        <Footer />

    </Router>
  );
}

export default App;
