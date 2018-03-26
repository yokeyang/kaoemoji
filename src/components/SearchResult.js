import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { httprequest } from '../api/api'
import { fetchData } from '../action/fetch-data'
import FetchData from '../reducer/FetchData'
import { Redirect } from 'react-router-dom';

class SearchResult extends Component{
    constructor(props){
        super(props)
        this.props.getData('/search', { "text": this.props.match.params.search},(data)=>{
            console.log(data)
        })
    }
    render() {
        return (
            <div className = "searchresult">
                <h2>搜索结果:</h2>
                {this.props.data.length == 1 && this.props.data[0].hasOwnProperty('emoji')?
                    <Redirect to = {{
                        pathname:`/emoji/${this.props.data[0].text_english.replace(/\s+/g, "")}`,
                        state:{emoji:this.props.data[0].emoji,text:this.props.data[0].text_chinese}
                        }} />:this.props.data.length<=0?<h3>没有结果(　 ゜Д゜)ノ#####←網</h3>:this.props.data.map(data => {
                        return <div className = "result" key = {data.hasOwnProperty('emoji')?data.emoji:data.kaomoji}>
                            <span>{data.hasOwnProperty('emoji')?data.emoji:data.kaomoji}</span>
                            &nbsp;
                            <span>{data.text_chinese}</span>
                        </div>
                })}
            </div>
        );
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
)(SearchResult)
