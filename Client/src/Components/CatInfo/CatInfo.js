import "./catInfo.scss"
import React,{useContext} from 'react'
import {CatsContext} from "../../App"
import {useLocation,Link} from "react-router-dom"

function CatInfo() {
    const {pathname} = useLocation()
    const currentCatBreed = decodeURI(pathname.slice(pathname.lastIndexOf("/")+1))
    const catsData = useContext(CatsContext)
    const singleCatData = catsData.filter(item=>item.breed === currentCatBreed)
    const tilesArray = [1,2,3,4,5]

    return (
        <section>
            <Link to="/"><img src="/Images/CatwikiLogo.svg" className='logo'/></Link>
            {singleCatData.map(item=>{
                return (
                    <div className="catInfoContainer" key={item._id}>
                            <img src={item.imgs[0]}/>
                            <div className="details">
                                <h1>{item.breed}</h1>
                                <p className="description">{item.description}</p>
                                <ul>
                                    <li><h2>Temperament: </h2><p>{item.temperament}</p></li>
                                    <li><h2>Origin: </h2><p>{item.origin}</p></li>
                                    <li><h2>Life Span: </h2><p>{item.lifeSpan}</p></li>
                                    {item.traits.map(trait=>{
                                        const objectKey = Object.keys(trait)[0]
                                        return (
                                            <li key={objectKey}>
                                                <h2>{objectKey}:</h2>
                                                {tilesArray.map((tileNumber,index)=>{
                                                    if(tileNumber <= Number(trait[objectKey])){
                                                        return <div key={index} className="tile active"></div>
                                                    }else {
                                                        return <div key={index} className="tile"></div>
                                                    }
                                                })}
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
