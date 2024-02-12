import './Header.css';
import Logo from './Logo';
import CallMail from './CallAndMail';


export default function Header(){
    return(
        <div className="header">
            <Logo />
            <CallMail/>

        </div>
    );
}