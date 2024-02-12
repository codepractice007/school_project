import './NoticeBoard.css'

export default function NoticeBoard() {
    return (
        <div className="noticeBoard">
            <h1>Notice Board</h1>
            
                <div className="data">
                    <img src="https://ndc.edu.bd/themes/notredame/assets/images/pdf-icon.png" alt="" />
                    <h4>Notice 1</h4>
                </div>
                <div className="data">
                    <img src="https://ndc.edu.bd/themes/notredame/assets/images/pdf-icon.png" alt="" />
                    <h4>Notice 2</h4>
                </div>
                <div className="data">
                    <img src="https://ndc.edu.bd/themes/notredame/assets/images/pdf-icon.png" alt="" />
                    <h4>Notice 3</h4>
                </div>
            
        </div>
    );
}