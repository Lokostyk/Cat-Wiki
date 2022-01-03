import "./topCats.scss"
import React,{useContext} from 'react'
import {Link} from "react-router-dom"
import {CatsContext} from "../../App"
import CatPreview from "./subcomponents/CatPreview"

function TopCats() {
    const catsData = useContext(CatsContext)
    return (
        <section className='topCatsContainer'>
            <Link to="/"><img src="./Images/CatwikiLogo.svg" className="topCatsLogo"/></Link>
            <h1>Top 10 most searched breeds</h1>
            {catsData.map((item,index)=>{
                index++
                return <CatPreview key={item._id} data={Object.assign(item,{index})}/>
            })}
        </section>
    )
}

export default TopCats
