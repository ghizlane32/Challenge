import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Loading } from "../components"
import { Home, Page404} from "../../pages"

const Navigation = (props) => {
    const LoadingPage = () => {
        return (
            <div className="d-flex align-items-center justify-content-center h-100">
                <Loading />
            </div>
        )
    }

    return (
        <BrowserRouter>
            <React.Suspense fallback={<LoadingPage />}>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => <Home {...props} />}
                    />
                    <Route path="*">
                        <Page404 />
                    </Route>
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
}

export default Navigation;
