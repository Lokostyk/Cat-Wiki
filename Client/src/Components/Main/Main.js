import "./main.scss"
import React,{useContext} from 'react'
import { Link } from "react-router-dom"
import {CatsContext} from "../../App"
import MainCats from "./subcomponents/MainCats"

function Main() {
    const cats = useContext(CatsContext)
    return (
        <section>
            <Link to="/"><img className="logo" src="/Images/CatwikiLogo.svg" /></Link>
            <div className="mainContainer">
                <div className="subContainer">
                    <div className="searchBreed">
                        <img src="/Images/CatwikiLogo_white.svg"/>
                        <p>Get to know more about your <br/> cat breed</p>
                        <form>
                            <input placeholder="Enter your cat breed"/>
                            <img className="magnifier" src="/Images/magnifier.svg" />
                        </form>
                    </div>
                    <img className="backgoundImg" src="/Images/HeroImagelg.png" />
                </div>
                <div className="mostSearched">
                    <p>Most searched breeds</p>
                    <div className="headerContainer">
                        <h1>66+ Breeds For you <br/> to discover</h1>
                        <Link to="/top10cats" className="btn">See more <img src="/Images/arrow.svg" /></Link>
                    </div>
                    <div className="mainCats">
                        {cats.map((item,index)=>{
                            if(index > 3) return
                            return <MainCats key={item._id} data={item}/>
                        })}
                    </div>
                </div>
            </div>
            <div className="whyCatContainer">
                <div className="subContainer">
                    <h1>Why should you <br /> have a cat?</h1>
                    <p>Having a cat around can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels.</p>
                    <button className="btn">Read more <img src="/Images/arrow.svg"/></button>
                </div>
                <div className="picturesContainer">
                    <div>
                        <img className="imgOne" src="/Images/image 2.png"/>
                        <img className="imgTwo" src="/Images/image 1.png"/>
                    </div>
                    <img className="imgThree" src="/Images/image 3.png"/>
                </div>
            </div>
        </section>
    )
}
export default Main
