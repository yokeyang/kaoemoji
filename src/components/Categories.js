import React, { Component } from 'react'
import { Link } from 'react-router-dom';
const Category = ({ links,match }) => {
  return (
    <section className = "link">
      <h3>{links.title}</h3>
      <ul>      
        {links.data.map((key)=>{
          return <li key={key.link}><Link to={`/category${key.link}`}>{key.moji}{key.text}</Link></li>
        })}
      </ul>
    </section>
  )
}

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link1:{title:'分类 / emoji',data:[
        { link: '/dog', moji: '🐶',text: '小狗' },
        { link: '/pig', moji: '🐖',text: '小猪' },
        { link: '/boar', moji: '🐗',text: '野猪' },
        { link: '/owl', moji: '🦉',text: '猫头鹰' },
      ]},
      link2: {
        title: '分类 / emoji', data: [
          { link: '/dog', moji: '🐶', text: '小狗' },
          { link: '/pig', moji: '🐖', text: '小猪' },
          { link: '/boar', moji: '🐗', text: '野猪' },
          { link: '/owl', moji: '🦉', text: '猫头鹰' },
        ]
      }
    }
  }
  
  render() {
    return (
      <div className = 'categories'>
        <Category links={this.state.link1} />
        <Category links={this.state.link2} />
        <Category links={this.state.link1} />
        <Category links={this.state.link2} />
      </div>
    )
  }
}
