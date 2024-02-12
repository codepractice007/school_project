import './footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer(){
    
    return(
        <div className="footer">
            <div className="footerUp">            
            <div className="fname">
                <img src="https://ndc.edu.bd/themes/notredame/assets/images/logo-footer.png" alt="" />
                <p>At the present time the College receives no financial aid from the government of Bangladesh. It is supported entirely by tuition fees collected from the students.</p>
            </div>
            <div className="sitemap">
                <h5>{">"} Home </h5>
                <h5>{">"} Admission </h5>
                <h5>{">"} Alumni </h5>
                <h5>{">"} Club </h5>
                <h5>{">"} Contact </h5>
            </div>
            <div className="sitemap">
                <h5>{">"} About </h5>
                <h5>{">"} News </h5>
                <h5>{">"} Faculty </h5>
                <h5>{">"} Result </h5>
            </div>
            </div>
            <div className="footerIcon">
                <FacebookOutlinedIcon/>
                <GitHubIcon/>
                <YouTubeIcon/>
                <LinkedInIcon/>
            </div>
        </div>
    );

}