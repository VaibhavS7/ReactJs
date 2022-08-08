import React, { Component, Suspense, lazy} from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Spinner from '../app/shared/Spinner';

class AppRoutes extends Component {
    render() {
        return (
            <Suspense fallback={<Spinner/>}>
                <Switch>
                    <Route path="" />
                </Switch>
            </Suspense>
        );
    }
}