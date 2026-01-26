import "./polaroid.css";
import { Link } from "react-router-dom";

function Polaroid({ imageurl, text, to }) {
  const content = (
    <div className="polaroid-container">
      <img className="photo" src={imageurl} alt={text} />
      <div className="polaroid-text">{text}</div>
    </div>
  );

  if (to) {
    return (
      <Link className="polaroid-link" to={to} aria-label={text}>
        {content}
      </Link>
    );
  }

  return content;
}
 
export default Polaroid;
