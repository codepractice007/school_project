import './Details.css'
import DCard from './DCard';

export default function Details() {
    return (
        <div className="details">
            <h1>Notre Dame College, Dhaka</h1>
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart like mine.</p>
            <div className="detailsmain">
                <div className="dImage">
                    <img src="https://ndc.edu.bd/storage/app/uploads/public/62a/043/2a9/62a0432a90c05993939702.png" alt="" />

                </div>
                <div className="dCard">
                    <div className="Cardrow1">
                        <DCard number={69} title={"TEACHERS"} />
                        <DCard number={20} title={"YEARS"} />
                    </div>
                    <div className="Cardrow2">
                        <DCard number={7320} title={"STUDENTS"} />
                        <DCard number={3} title={"BUILDING"} />
                    </div>
                </div>
            </div>
        </div>
    );
}