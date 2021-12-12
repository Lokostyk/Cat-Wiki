import "./searchElement.scss"
import React from 'react'

function SearchElement() {
    return (
        <section>
            <img className="logo" src="/Images/CatwikiLogo.svg" />
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
                        <button>See more <img src="/Images/arrow.svg" /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SearchElement
