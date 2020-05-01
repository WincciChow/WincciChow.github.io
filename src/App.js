import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Home from "./components/Home";
import CrepeUp from "./components/CrepeUp";
import ScrollToTop from "./components/ScrollToTop";
import WeatherReact from "./components/WeatherReact";
import Model from "./components/Model";
import VueChat from "./components/VueChat";


function App(props) {
    return (
        <div className="app">
            <ScrollToTop />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/crepe-up" component={CrepeUp} />
                <Route exact path="/weather-react" component={WeatherReact} />
                <Route exact path="/model" component={Model} />
                <Route exact path="/vue-chat" component={VueChat} />
            </Switch>
        </div>
    );
}

export default App;
