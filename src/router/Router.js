import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import homePage from '../view/homePage/index'
import myblog from '../view/myBlog/index'
// import Header from '../components/header/index'
// import DefaultLayout from './layouts/DefalutLayout/DefaultLayout';
// import LoginUser from './layouts/LoginUser/LoginUser';
export default class RouterWrap extends Component {
    render() {
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={homePage} />
                        <Route path="/myblog" component={myblog} />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}