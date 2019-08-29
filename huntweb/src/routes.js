import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/main';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Main}/>
        </Switch>
    </BrowserRouter>
);

export default Router;