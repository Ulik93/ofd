import "./index.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";
import Knowledgebase from "./components/knowledgebase/Knowledgebase";
import Kassa from "./components/kassa/EquipmentMain";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/knowledgebase" component={Knowledgebase} exact />
        <Route path="/Kassa" component={Kassa} exact />
        <Redirect to="/" />
      </Switch>
      <div>
        OFD
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
