import './Event.css'
import EventCard from './EventCard';
export default function Events() {
    return (
        <div className="events">
            <h1>RECENT AND UPCOMING EVENTS</h1>
            <p>I feel the presence of the Almighty, who formed us in his own image, and the breath.</p>
            <div className="eventsmain">
                <EventCard text={"Nobin Boron - 2024"} date={"June 7, 2024"} image={"https://ndc.edu.bd/storage/app/uploads/public/643/d0e/006/thumb_733_370_240_0_0_crop.jpg"} />
                <EventCard text={"আন্তর্জাতিক মাতৃভাষা দিবস - ২০২৪"} date={"February 21, 2024"} image={"https://ndc.edu.bd/storage/app/uploads/public/629/eeb/9f5/thumb_277_370_240_0_0_crop.jpg"} />
                <EventCard text={"বাংলা নববর্ষ - ১৪৩১"} date={"April 14, 2024"} image={"https://ndc.edu.bd/storage/app/uploads/public/643/d0e/006/thumb_733_370_240_0_0_crop.jpg"} />
                
            </div>
        </div>
    );
}