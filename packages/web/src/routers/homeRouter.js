import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Login from '../components/login/login';
import HomePage from '../components/homePage/homePage';
import Register from '../components/register/register';
import NavBar from '../components/nav/navBar';


function HomeRouter() {
    return (

        <Router>
            <NavBar/>
            <Switch>
                <Route exact  path="/"  component={HomePage}>
                    <HomePage/>
                </Route>
                <Route  path="/login" component={Login}>
                    <Login/>
                </Route>
                <Route  path="/register" component={Register}>
                    <Register/>
                </Route>
            </Switch>
        </Router>

    );
}

export default HomeRouter;