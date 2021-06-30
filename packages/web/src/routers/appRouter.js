import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import ShowEntries from '../components/showEntries/showEntries';
import NavBar from '../components/nav/navBar'



function AppRouter() {
    return (

        <Router>
            <NavBar/>
            <Switch>
                <Route exact  path="/entries"  component={ShowEntries}>
                    <ShowEntries/>
                </Route>
            </Switch>
        </Router>

    );
}

export default AppRouter;