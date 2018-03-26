import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bubbleDisplay: 'none',
            bubbleWidth: '5vh',
            bubbleHeight: '5vh',
        }
    }
    
    showBubble = () => {
        this.setState({
            bubbleDisplay:'inline-block',
        })
        window.setTimeout(() => {
            this.setState({
                bubbleHeight: '30vh',
                bubbleWidth: 'auto'
            })
        }, 10);
    }
    hideBubble = () => {
        this.setState({
            bubbleDisplay: 'none',
            bubbleHeight: '0',
            bubbleWidth: '0'
        })
    }
    componentWillUnmount = () => {
        this.setState = (state, callback) => {
            return;
        };
    }

    handleSubmit = (e) => {
        e.preventDefault()
        window.location = '/search/' + this.input.value
    }

    render() {
        let bubbleStyle = {
            display: this.state.bubbleDisplay,
            width: this.state.bubbleWidth,
            height: this.state.bubbleHeight
        }
        return (
            <div className = "search">
                <form onSubmit = {this.handleSubmit}>
                    <input
                        className = 'search-input'
                        placeholder= "kaoemoji一下 ヾ(´∀`o)+"
                        ref = {ref => this.input = ref}
                    />
                </form>
                <section className = "suggestion">
                    {[1,2,3,4,5,6,7].map((key)=>{
                        return(
                            <div className="sg" key = {key}>
                                <img alt="kaomoji" className="static-img" src={`/kaomoji/statics/kaomoji${key}.png`} />
                                <img alt="kaomoji" className="hover-img" src={`/kaomoji/kaomoji${key}.jpg`} />
                            </div>
                        )
                    })}
                </section>
                <section className="side-info" onMouseLeave={this.hideBubble}>
                    <img alt="logo" src="/emoji.png" onClick={this.showBubble}/>
                    <div className="talkbubble" style={bubbleStyle}>
                        <h4>你好啊</h4>
                        <p>谢谢光顾我的网站</p>
                        <p>如果你觉得他给你带来乐趣的话，很高兴你能把他分享出去哦</p>
                        <p>（´v｀）不错的话，也可以点点广告哦</p>
                    </div>
                </section>
            </div>
        )
    }
}
