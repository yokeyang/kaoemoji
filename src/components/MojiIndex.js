import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class MojiIndex extends Component {
    render() {
        const cate = this.props.match.params.cate
        return (
            <div className = "moji-index">
                <Link to= {`/category/${cate}`}><h2>{cate}</h2></Link>
                <section className = "content">
                    {['😃', '😃', '😃', '😃', '😃', '😃', '😃', '😃', '😃', '😃', '😃', '😃'].map((key)=>{
                        return <Link to = "/"><span>{key}</span></Link>
                    })}
                </section>
            </div>
        )
    }
}
