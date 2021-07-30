import React from 'react'

const Books = ({title, author, picture, description}) => {
    return (
        <div className='Book'>
        <div className='prink'>
        <div className='pics'>
            <img src={picture} alt="" />
        </div>
        <div className='title'>
            <h1>{title}</h1>
            <p>by {author}</p>
        </div>
        <div className='desc'>
        {description}
        </div>
    </div>
        </div>
    )
}

export default Books
