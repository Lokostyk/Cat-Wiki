import "./catInfo.scss"
import React,{useContext} from 'react'
import {CatsContext} from "../../App"
import {useLocation} from "react-router-dom"

function CatInfo() {
    const {pathname} = useLocation()
    const currentCatBreed = decodeURI(pathname.slice(pathname.lastIndexOf("/")+1))
    const catsData = useContext(CatsContext)
    const singleCatData = catsData.filter(item=>item.breed === currentCatBreed)
    console.log(singleCatData)
    return (
        <section>
            <img src="/Images/CatwikiLogo.svg" className='logo'/>
            {singleCatData.map(item=>{
                return (
                    <div className="catInfoContainer" key={item._id}>
                            <img src={item.imgs[0]}/>
                            <div className="details">
                                <h1>{item.breed}</h1>
                                <p>{item.description}</p>
                                <ul>
                                    <li><h2>Temperament: </h2>{item.temperament}</li>
                                    <li><h2>Origin: </h2>{item.origin}</li>
                                    <li><h2>Life Span: </h2>{item.lifeSpan}</li>
                                    {item.traits.map(trait=>{
                                        const objectKey = Object.keys(trait)[0]
                                        return (
                                            <li key={objectKey}><h2>{objectKey}</h2>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                    </div>)
            })}
        </section>
    )
}

export default CatInfo
