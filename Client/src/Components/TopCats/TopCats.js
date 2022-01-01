import "./topCats.scss"
import React from 'react'
import {Link} from "react-router-dom"

function TopCats() {
    return (
        <section className='topCatsContainer'>
            <Link to="/"><img src="./Images/CatwikiLogo.svg" className="topCatsLogo"/></Link>
            <h1>Top 10 most searched breeds</h1>
        </section>
    )
}

export default TopCats
