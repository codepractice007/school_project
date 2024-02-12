import './ContactBar.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactBar(){
    return(
        <div className="contactBar">
            <div className="contact-info">
                <div className="address">
                <LocationOnIcon/>
                <h3>Address</h3>
                <p>Uttara, Dhaka</p> 
                </div>
            </div>
            <div className="line">
                <div class="vertical-line"></div>        
                <div class="vertical-lineMid"></div>        
                <div class="vertical-line"></div>        
            </div>

            <div className="contact-info">
                <div className="phone">
                <PhoneIcon/>
                <h3>Phone Number</h3>
                <p>+8801878009399</p>

                </div>
            </div>
            <div className="line">
                <div class="vertical-line"></div>        
                <div class="vertical-lineMid"></div>        
                <div class="vertical-line"></div>        
            </div>
            <div className="contact-info">
                <div className="email">
                <EmailIcon/>
                <h3>Email Address</h3>
                <p>sazzadhossainadin@gmail.com</p>
                </div>
                {/* <div class="vertical-line"></div>                */}

            </div>
        </div>
    );
}