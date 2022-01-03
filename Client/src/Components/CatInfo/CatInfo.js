import React,{useContext} from 'react'
import {CatsContext} from "../../App"
import {useLocation} from "react-router-dom"

function CatInfo() {
    const {pathname} = useLocation()
    const currentCatBreed = decodeURI(pathname.slice(pathname.lastIndexOf("/")+1))
    const catsData = useContext(CatsContext)
    const singleCatData = catsData.filter(item=>item.breed === currentCatBreed)

    return (
        <section>
            <img src="/Images/CatwikiLogo.svg" className='logo'/>
            {singleCatData.map(item=>{
                return (
                    <React.Fragment key={item.id}>

                    </React.Fragment>)
            })}
        </section>
    )
}

export default CatInfo
