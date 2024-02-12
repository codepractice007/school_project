import './EventCard.css'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

export default function EventCard({text,date,image}){
    return(
        <div className="eventCard">
            <img src={image} alt="" />
            <div className="eventText">
                <div className="eventDate">
                    <CalendarMonthOutlinedIcon/>
                    <p>{date}</p>
                </div>
                <h3>{text}</h3>
            </div>
        </div>
    );
}