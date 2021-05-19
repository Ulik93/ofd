import './index.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from "./components/home";
import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";
import Knowledgebase from './components/knowledgebase/Knowledgebase';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/knowledgebase' component={Knowledgebase} exact />
                <Redirect to='/' />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App