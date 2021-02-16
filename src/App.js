import React from "react";
//Herramientas
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Componentes
import Header from "./Layout/Header";
import Inicio from './components/Inicio'
import Eventos from "./components/Eventos";
import Teams from "./components/Teams.js";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";

function App() {
    return (
        <Router>
            <Header />
            <div className='container'>
                <Switch>
                    <Route exact path="/" component={Inicio} />
                    <Route exact path="/eventos" component={Eventos} />
                    <Route exact path="/teams" component={Teams} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                </Switch>
            </div>
            
        </Router>
    );
}

export default App;
