import './TopBar.css';
import NoticeSc from './NoticeScroll';
import SocialIcon from './SocialIcon';

export default function TopBar(){
    return(
        <div className="topBar">
            <div className="scroll">
                 <NoticeSc/>
            </div>
                 <SocialIcon />
        </div>
    );

}