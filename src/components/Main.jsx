import React from 'react'
import Book from './Book'
import data from '../data'
const Main = () => {
    return (
        <div className='bookList'>
           {data.map((bookData)=>{
               return(
                   <Book {...bookData}/>

               )
               
           })}
        </div>
    )
}

export default Main
