import './Container.css';
import About from './About';
import NoticeBoard from './NoticeBoard';

export default function Container(){
    return(
        <div className="container">
            <About />
            <NoticeBoard/>

        </div>
    );
}