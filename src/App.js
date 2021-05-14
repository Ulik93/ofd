import './index.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from "./components/home";
import Header from "./components/header/header";
import pageKassy from "./pages/pageKassy/pageKassy";
import pageTarify from "./pages/pageTarify/pageTarify";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' component={Home} exact />
                <Redirect to='/' />
            </Switch>
        </BrowserRouter>
    )
}

export default App