import React from 'react'
import {Link} from "react-router-dom"

function CatPreview(props) {
    const data = props.data
    return (
        <Link to={`/top10cats/${data.breed}`} className='catPreviewContainer'>
            <img src={data.imgs[0]}/>
            <div className='subContainer'>
                <h2>{data.index}. {data.breed}</h2>
                <p>{data.description}</p>
            </div>
        </Link>
    )
}

export default CatPreview
