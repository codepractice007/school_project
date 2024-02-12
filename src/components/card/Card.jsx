import './Card.css'
import CardIcon from './CardIcon';

export default function Card(){
    return(
        <div className="card">

            <CardIcon icon="https://ndc.edu.bd/themes/notredame/assets/images/pm_icon.png" des="Pricipal Corner"/>
            <CardIcon icon="https://ndc.edu.bd/themes/notredame/assets/images/tp.png" des="Faculty"/>
            <CardIcon icon="https://ndc.edu.bd/themes/notredame/assets/images/results_icon.png" des="Results"/>
            <CardIcon icon="https://ndc.edu.bd/themes/notredame/assets/images/alumni.png" des="Alumni"/>
            <CardIcon icon="https://ndc.edu.bd/themes/notredame/assets/images/clubs_icon.png" des="Clubs"/>

        </div>
    );
}