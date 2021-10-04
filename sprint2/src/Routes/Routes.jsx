import React from "react";
import { BrowserRouter as  Router,Route,Switch } from 'react-router-dom';
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Productos from "../Pages/Productos/Productos";
import Usuarios from "../Pages/Usuarios/Usuarios";
import Ventas from "../Pages/Ventas/Ventas";
const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}>
                    </Route>
                    <Route exact path="/home" >
                        <Home/>
                    </Route>
                    <Route exact path="/usuarios" component={Usuarios}>
                    </Route>
                    <Route exact path="/productos" component={Productos}>
                    </Route>
                    <Route exact path="/ventas" component={Ventas}>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default Routes;
