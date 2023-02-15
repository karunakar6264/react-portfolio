import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Menu from "./component/Menu";
import Pnf from "./component/Pnf";
import Projects from "./component/Projects";
import Resume from "./component/Resume";

function App(props) {
  return (
    <BrowserRouter>
        <Menu/>

        <Router>
            <route path={'/'} element={<Home/>} />
            <route path={'/About'} element={<About/>} />
            <route path={'/Resume'} element={<Resume/>} />
            <route path={'/Projects'} element={<Projects/>} />
            <route path={'/Contact'} element={<Contact/>} />
            <route path={'/*'} element={<Pnf/>} />
        </Router>
    </BrowserRouter>
  )
}
export default App