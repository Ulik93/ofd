import '../src/index.css'


import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import pageUslugi from "./pages/pageUslugi/pageUslugi";
import Home from "./components/home";
import Header from "./components/header/header";
import Footer from "./components/secondFooter/Footer";
import pageKassy from "./pages/pageKassy/pageKassy";
import pageTarify from "./pages/pageTarify/pageTarify";
import pageContacts from "./pages/pageContacts/pageContacts";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/uslugi' component={pageUslugi} exact />
                <Route path='/kassy' component={pageKassy} exact />
                <Route path='/tarify' component={pageTarify} exact />
                <Route path='/contacts' component={pageContacts} exact />
                <Redirect to='/' />
            </Switch>
            <Footer />
            {/* <a href='https://api.whatsapp.com/send?phone=+996501588882' target='_blank' rel='noopener noreferrer' className='fab fa-whatsapp' ></a> */}
        </BrowserRouter>
    )
}

export default App