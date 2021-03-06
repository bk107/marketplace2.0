import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Home from '../components/Home/Home'
import MyAccount from '../components/MyAccount/MyAccount'
// import Register from '../components/Register/Register'
import SignIn from '../components/SignIn/SignIn'
import ProductDetailPage from './product_detail'
import SellerDetailPage from './seller_detail'
import NotFoundPage from './_404'

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/my-account" component={MyAccount} />
            <Route exact path="/products/:id" component={ProductDetailPage} />
            <Route exact path="/company/:id" component={SellerDetailPage} />
            <Redirect from="/company/products/:id" to="/products/:id" />
            <Route path="*">
                <NotFoundPage />
            </Route>
        </Switch>
    )

}

export default Routes