import React, { Component } from 'react'
import logo from '../logo.svg'

export default class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = "head">
                <section className = "logo">
                    <img src={logo} />
                </section>
                <section className = "nav">
                    <ul>
                        <li><a href = "javascript:void(0)">首页</a></li>
                        <li><a href = "javascript:void(0)">颜文字</a></li>
                        <li><a href = "javascript:void(0)">emoji</a></li>                        
                    </ul>
                </section>
            </div>
        )
    }
}