import React, { useState } from 'react'
import { Filter } from './Filter'
import { Moviecard } from './Moviecard'

export const Movielist = ({ movies }) => {
    const [text, settext] = useState("");
    const [rate, setrate] = useState("");

    const filterText = (text)=>{
        settext(text);
    };

    const filterRate = (rate)=>{
        setrate(rate);
    };

    console.log (movies)
    return (
        <div>
            <Filter filterText={filterText} filterRate={filterRate}/>
        <div className='movielist'>
            { movies.filter((el) => el.name.toLowerCase().includes (text.toLowerCase()) && (el.rating>=rate)).map((el)=>(<Moviecard movie={el}/>))}
        </div>
        </div>
    )
}
