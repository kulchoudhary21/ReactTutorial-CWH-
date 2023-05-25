import fliplogo from "../images/flip-logo.png";
import "../css/Header.css";
function Header() {
  return (
    <div>
        <div className="head">
        <div className="col-md flip-img">
          <a href="www.google.com">
            <img src={fliplogo} alt="flipcart image"/>
          </a>
        </div>
        <div className="col-md">
           
        </div> 
    
      </div>
    </div>
  );
}
export default Header;
