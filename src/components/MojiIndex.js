import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { httprequest } from '../api/api'
import { fetchData } from '../action/fetch-data'
import FetchData from '../reducer/FetchData'

class RenderEmoji extends Component {
    constructor(props){
        super(props)
        this.props.getData('/getEmoji', { "category": this.props.cate},(data)=>{
            data.map(key => [{ ...key }])
        })
    }
    render(){
        return <section className="content">
            {this.props.data.length > 0 && this.props.data[0].hasOwnProperty('text_english') && this.props.data.map((e)=>{
                var path = {
                    pathname:`/emoji/${e.text_english.replace(/\s+/g, "")}`,
                    state:{emoji:e.emoji,text:e.text_chinese},
                }
                return <Link key={e.emoji} to= {path} ><span>{e.emoji}</span></Link>
            })}
        </section>
    }
}

class RenderKaomoji extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index:[]
        }
    }

    renderKaomoji = (text) => {
        this.props.getData('/getKaomoji', { "category": this.props.cate,"text":text }, (data) => {
            console.log('ok')
        })
    }
    
    componentDidMount(){
        this.props.getData('/getKaomojiIndex', { "category": this.props.cate }, (data) => {
            this.setState({index: data})
        })
    }

    handleClick = (kaomoji) => {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(this[kaomoji]);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    render(){
        return <section className="content">
            {this.state.index.map((e) => {
                return <a key = {e.text_chinese} className="index" onClick={this.renderKaomoji.bind(this,e['text_chinese'])} href = "javascript:void(0)"><span>{e['text_chinese']}</span></a>
            })}
            <div className = "kaomojilist">
                {this.state.index !== this.props.data && this.props.data.map((e) => {
                    return <span ref = {ref => this[e.kaomoji] = ref } onClick = {this.handleClick.bind(this,e.kaomoji)} key = {e.id || e.text_chinese}>{e.kaomoji}</span>
                })}
            </div>
        </section>
    }
}

class MojiIndex extends Component {
    render() {
        const cate = this.props.match.params.cate
        const type = this.props.match.params.type
        return (
            <div className = "moji-index">
                <h2>
                    <Link to= '/'>首页</Link>
                    &nbsp;>&nbsp;
                    <Link to= {`/category/${type}/${cate}`}>{cate}</Link>
                </h2>
                {type == 'emoji' ? 
                    <RenderEmoji
                        cate={cate}
                        getData = {this.props.getData}
                        data = {this.props.data}
                        match = {this.props.match}
                    />:
                    <RenderKaomoji
                        cate={cate}
                        getData={this.props.getData}
                        data={this.props.data}
                    />}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { data: state.FetchData }
}
const mapDispatchToProps = dispatch => {
    return {
        getData: (url,body,cb) => {
            httprequest(url,body).then((e) => {
                dispatch(fetchData(e))
                cb(e)
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MojiIndex)
