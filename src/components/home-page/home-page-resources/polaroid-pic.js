import './polaroid.css'

function Polaroid({imageurl}){
  return(

    <div class="polaroid-container">
      <img class="photo"src={imageurl} alt="placeholder-text"/>
    </div>
  );
}
 
export default Polaroid;