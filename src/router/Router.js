import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import HomePage from '../view/homePage/index'
import myblog from '../view/myBlog/index'
// import DefaultLayout from './layouts/DefalutLayout/DefaultLayout';
// import LoginUser from './layouts/LoginUser/LoginUser';
export default class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={HomePage}  exact />
                        <Route path="/myblog" component={myblog} />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}