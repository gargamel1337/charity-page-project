import './App.scss';
import {HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom';
import Home from "./components/header/Home";
import Section_TreeColumns from "./components/sections/Section_TreeColumns";
import Section_FourColumns from "./components/sections/Section_FourColumns";
import AboutUs from "./components/sections/AboutUs";
import Footer from "./components/footer/Footer";
import HelpMain from "./components/who_we_help/Help_main";

function App() {
  return (
      <HashRouter>
        <div className="App">
          <header><Home/></header>
          <Switch>
            <Route exact path="/">
                <>
                    <Section_TreeColumns/>
                    <Section_FourColumns/>
                    <AboutUs/>
                    <HelpMain/>
                </>
          </Route>

          </Switch>

          <footer><Footer/></footer>
        </div>
      </HashRouter>
  );
}

export default App;
