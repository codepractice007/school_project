import { useState } from 'react';
import './CardIcon.css'
import CardText from './CardText';

export default function CardIcon({icon, des}){
    const [ishover,setHover] = useState(false);
    return(
        <div className={ishover?'cardIconHover':'cardIcon'} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
            <img src={icon} />
            <CardText des={des} />

        </div>

    );
}