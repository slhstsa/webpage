import './polaroid.css'

function Polaroid({imageurl, text}){
  return(

    <div class="polaroid-container">
      <img class="photo" src={imageurl} alt="placeholder-text"/>
      <div class="polaroid-text"> {text}</div>
    </div>
  );
}
 
export default Polaroid;