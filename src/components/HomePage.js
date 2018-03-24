import React, { Component } from 'react'
import SearchInput from './SearchInput'
import Categories from './Categories'
import { Link } from 'react-router-dom';

const HomePage = ({match}) =>{
    return(
        <div>
            <Categories />
        </div>
    )
}
export default HomePage