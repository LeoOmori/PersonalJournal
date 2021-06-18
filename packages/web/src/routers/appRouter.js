import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import ShowEntries from '../components/showEntries/showEntries';



function AppRouter() {
    return (

        <Router>
            <Switch>
                <Route exact  path="/entries"  component={ShowEntries}>
                    <ShowEntries/>
                </Route>
            </Switch>
        </Router>

    );
}

export default AppRouter;