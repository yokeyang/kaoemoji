import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import HomePage from './components/HomePage'
import Head from "./components/Head";
import MojiIndex from "./components/MojiIndex";
import SearchInput from './components/SearchInput'
import logo from './logo.svg';

const CustomRouter = (props) => {
    return (
        <Router>
            <div>
                <Head />
                <Route exact path="/" render={() => <section className="doge-logo">
                    <Link to="/">
                        <img alt="doge-logo" src="/doge.png" />
                    </Link>
                </section>} />
                <Route exact path="/" render= {HomePage} />
                <SearchInput />
                <Route path = "/category/:cate" component = {MojiIndex} />
            </div>
        </Router>
    )
}
export default CustomRouter