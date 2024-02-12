import { useState } from 'react';
import './DCard.css'

export default function DCard({number,title}){
    const [ishover,setHover] = useState(false);
   
    return(
        <div className={ishover?"deCardhover ":"deCard"} onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
            <h1>{number}</h1>
            <h3>{title}</h3>
        </div>
    );
}