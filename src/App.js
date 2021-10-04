import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext } from "react";
//import bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
// import components
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
// import custom hooks
import useServices from "./components/hooks/useServices";
export const ServiceContext = createContext("service");
function App() {
  const [services, setServices] = useServices();
  return (
    <ServiceContext.Provider value={[services, setServices]}>
      <div>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/aboutus">
              <About></About>
            </Route>
            <Route path="/contactus">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </ServiceContext.Provider>
  );
}
export default App;
