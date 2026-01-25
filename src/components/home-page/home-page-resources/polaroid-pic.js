import './polaroid.css'

function Polaroid({imageurl, text}){
  return(

    <div className="polaroid-container">
      <img className="photo" src={imageurl} alt="placeholder-text"/>
      <div className="polaroid-text"> {text}</div>
    </div>
  );
}
 
export default Polaroid;