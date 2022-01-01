import React from 'react'

function mainCats(props) {
    const data = props.data
    console.log(data)
    return (
        <div className='catContainer'>
            <img src={data.imgs[0]} />            
            <h2>{data.breed}</h2>
        </div>
    )
}

export default mainCats
