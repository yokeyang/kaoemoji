import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import HomePage from './components/HomePage'
import Head from "./components/Head";
import MojiIndex from "./components/MojiIndex";
import Moji from "./components/Moji";
import SearchInput from './components/SearchInput'
import SearchResult from './components/SearchResult'
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
                <SearchInput />
                <Route exact path="/" render= {HomePage} />
                <Route exact path = "/category/:type/:cate" component = {MojiIndex} />
                <Route exact path = "/emoji/:emoji" component = {Moji} />
                <Route exact path = "/search/:search" component = {SearchResult} />
            </div>
        </Router>
    )
}
export default CustomRouter