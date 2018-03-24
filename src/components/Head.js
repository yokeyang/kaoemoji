import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

export default class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = "head">
                <section className = "logo">
                    <Link to = "/">
                        <img src={logo} />
                    </Link>
                </section>
                <section className = "nav">
                    <ul>
                        <li><Link to = "/">首页</Link></li>
                        <li><Link to = "/kaomoji">颜文字</Link></li>
                        <li><Link to = "/emoji">emoji</Link></li>                        
                    </ul>
                </section>
            </div>
        )
    }
}