import React, { Component } from 'react'
import { Link } from 'react-router-dom';
const Category = ({ links,match }) => {
  return (
    <section className = "link">
      <h3>{links.title}</h3>
      <ul>      
        {links.data.map((key)=>{
          return <li key={key.link}><Link to={`/category/${links.type}${key.link}`}>{key.moji} <strong>{key.text}</strong></Link></li>
        })}
      </ul>
    </section>
  )
}

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ecate:{title:'分类 / emoji', type:'emoji', data:[
        { link: '/smileys_people', moji: '😃',text: '笑脸和人' },
        { link: '/animals_nature', moji: '🐻',text: '自然和动物' },
        { link: '/food_drink', moji: '🍔',text: '食品和饮料' },
        { link: '/activity', moji: '⚽',text: '行动' },
        { link: '/travel_places', moji: '🌇', text: '旅行和地点' },
        { link: '/objects', moji: '💡', text: '一些东西' },
        { link: '/symbols', moji: '🔣', text: '符号' },
        { link: '/flags', moji: '🎌', text: '旗帜' },                
      ]},
      kaocate: {
        title: '分类 / kaomoji', type:'kaomoji', data: [
          {link: '/action', moji: '', text: '行动' },
          { link: '/angry', moji: '', text: '生气' },
          { link: '/battle', moji: '', text: '凶狠' },
          { link: '/event', moji: '', text: '事件' },
          { link: '/greet', moji: '', text: '打招呼' },
          { link: '/greet_io', moji: '', text: '问候（出入）' },
          { link: '/life', moji: '', text: '生活' },
          { link: '/love', moji: '', text: '喜欢' },
          { link: '/pain', moji: '', text: '痛苦' },
          { link: '/sad', moji: '', text: '伤心' },
          { link: '/talk', moji: '', text: '会话' },
          { link: '/fun', moji: '', text: '开心' },
          { link: '/eow', moji: '', text: '浓浓的' },
          { link: '/other', moji: '', text: '其他' },
        ]
      }
    }
  }
  
  render() {
    return (
      <div className = 'categories'>
        <Category links={this.state.ecate} />
        <Category links={this.state.kaocate} />
      </div>
    )
  }
}
