import projects from '../src/Assets/projects.json'

import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProjectDisplay } from "./Components/ProjectDisplay/ProjectDisplay";
import { About } from "./Components/About/About";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/projects">
          <ProjectDisplay projects={projects}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
