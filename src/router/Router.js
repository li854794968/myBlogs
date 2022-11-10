import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../view/homePage/index'
import myblog from '../view/myBlog/index'
// import Header from '../components/header/index'
// import DefaultLayout from './layouts/DefalutLayout/DefaultLayout';
// import LoginUser from './layouts/LoginUser/LoginUser';
export default class RouterWrap extends Component {
    render() {
        return (
            <Fragment>
                <HashRouter>
                    <Switch>
                        <Route path="/homePage" component={HomePage} />
                        <Route exact path="/" component={HomePage} />
                        <Route path="/myblog" component={myblog} />
                        <Redirect to={"/homePage"} />
                    </Switch>
                </HashRouter>
            </Fragment>
        )
    }
}