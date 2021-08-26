import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/Home/Home'
import Register from '../components/Register/Register'
import SignIn from '../components/SignIn/SignIn'

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )

}

export default Routes