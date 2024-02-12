import { useState } from 'react';
import './About.css'
export default function About() {



    const [showHistory, setShowHistory] = useState(false);
    const [showMission, setShowMission] = useState(false);
    const [showVision, setShowVision] = useState(false);

    const clickHistory = ()=>{
       
        {showHistory===false?(setShowHistory(true),setShowMission(false),setShowVision(false)):setShowHistory(false)}
        
        console.log(showHistory);
    }
    const clickMission = ()=>{
       
        {showMission===false?(setShowMission(true),setShowHistory(false),setShowVision(false)):setShowMission(false)}
        
        console.log(showMission);
    }
    const clickVision = ()=>{
       
        {showVision===false?(setShowVision(true),setShowHistory(false),setShowMission(false)):setShowVision(false)}
        
        console.log(showVision);
    }




    return (
        <div className="about">

            <h1>Welcome To Dhaka College, Dhaka</h1>
            <p>At the present time the College receives no financial aid from the government of Bangladesh. It is supported entirely by tuition fees collected from the students.</p>

            <div className="aboutCard">
                <div className="history">
                  <h3 onClick={clickHistory}>College History</h3>
                  <p>{showHistory && "Notre Dame College was established in Laxmibazar, Dhaka in November, 1949. It was established by the Roman Catholic Priests from the Congregation of Holy Cross for the reason of existing crisis in education sector of the new born East Pakistan of that time. It was Archbishop Graner, CSC, as Archbishop of Dhaka and leader of the Catholic Church in East Pakistan, invited the Congregation of Holy Cross Priest Society to found and administer a college in this new country. Initially, it was known as the St. Gregory College, an extension of the St. Gregory School, which was also established by the Congregation. It was relocated to its current location in Motijheel in 1954 and renamed to Notre Dame College. The Congregation of Holy Cross also maintains the University of Notre Dame, Portland University, and Kings and Stonehill College in the United States. The new name was a tribute to the University of Notre Dame, the alma mater of many of the faculty members. In French Notre Dame means Our Lady, that stands for Mother Mary."} </p>
                </div>
                <div className="history">
                  <h3 onClick={clickMission}>Our Mission</h3>
                  <p>{showMission && "In fulfillment of the vision, the College, established and administered by the Congregation of Holy Cross Priest Society, offers quality education and endeavors to form students in moral values -- tolerance, justice, compassion, responsibility and deep love for the society, the country and the world. The College cultivates both mind and heart to become fully-developed and actualized human beings."}</p>
                </div>
                <div className="history">
                  <h3 onClick={clickVision}>Our Vision</h3>
                  <p>{showVision && "Notre Dame College envisions providing a comprehensive education to develop the whole person -- committed, creative, productive, service-oriented, academically competent and responsive to face the challenges of the times."}</p>
                </div>
            </div>

        </div>


    );
}