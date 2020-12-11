import './App.scss';
import {HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom';
import Section_TreeColumns from "./components/sections/Section_TreeColumns";
import Section_FourColumns from "./components/sections/Section_FourColumns";
import AboutUs from "./components/sections/AboutUs";
import Footer from "./components/footer/Footer";
import HelpMain from "./components/who_we_help/Help_main";
import Login from "./components/header/login/Login";
import Registration from "./components/header/login/Registration";
import Home from "./components/header/Home";
import Header from "./components/header/Header";

function App() {
    return (
        <HashRouter>
            <div className="App">
                <header><Header/></header>
                <Switch>
                    <Route exact path="/">
                        <>
                            <Home/>
                            <Section_TreeColumns/>
                            <Section_FourColumns/>
                            <AboutUs/>
                            <HelpMain/>
                            <Footer/>
                        </>
                    </Route>

                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/registration">
                        <Registration/>
                    </Route>
                    <Route path="/aboutus">
                        <AboutUs/>
                    </Route>
                    <Route path="/fundacje">
                        <HelpMain/>
                    </Route>
                    <Route path="/mission">
                        <Section_FourColumns/>
                    </Route>
                </Switch>
                <footer></footer>
            </div>
        </HashRouter>
    );
}

export default App;

