import "./SocialIcon.css";

export default function NoticeSc(){
    return(
        <div className="scrollNotice">
        <marquee behavior="scroll" direction="left">
          <table class="border-0">
            <tbody><tr>
              <td>
                <a className=" text-light"> 75 Years Celebration Program </a> &nbsp; &nbsp; &nbsp;
              </td>
              <td>
                <a className=" text-light" > WELCOME TO NOTRE DAME COLLEGE, DHAKA </a> &nbsp; &nbsp; &nbsp;
              </td>
              <td>
                <a className=" text-light" > At a glance </a> &nbsp; &nbsp; &nbsp;
              </td>
            </tr>
            </tbody></table>
        </marquee>
      </div>
    );
}