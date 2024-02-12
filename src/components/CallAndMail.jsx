import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import './CallAndMail.css';


export default function CallMail(){
    return(
        <div className="callmail">
            <div className="call">
                <div className="calltitle">
                   <PhoneOutlinedIcon/> 
                   <h4>Call Us</h4>
                </div>               
               <p>+8801258966666</p>
            </div>
            <div className="mail">
                <div className="mailtitle">
                   <DraftsOutlinedIcon/> 
                   <h4>Mail Us</h4>
                </div>               
               <p>sazzad@gmail.com</p>

            </div>
        </div>
    );

}