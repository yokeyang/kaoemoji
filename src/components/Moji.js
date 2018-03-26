import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Moji extends Component {
    render() {
        const state = this.props.location.state
        return (
            <div className = "moji-index">
                <h1>
                    {state.emoji}&nbsp;
                    <span>{state.text}</span>
                </h1>
            </div>
        )
    }
}