import PropTypes from 'prop-types';

const Recipie = ({recipe,wantToCook}) => {
    const {recipe_name ,recipe_image ,short_description ,ingredients,calories,preparing_time}= recipe;
        return (
        <div >
            
            <div className="card w-96 bg-base-100 shadow-xl">
           
  <figure className="px-10 pt-10">
    <img src={recipe_image} alt={recipe_name} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{short_description}</p>

    <hr />



    <h3>Ingredients:{ingredients.length}</h3>
    
      
     {recipe.ingredients.map((item, index)=>(<li key={index}>{item}</li>))} 
        
      
    
<div className='flex justify-evenly gap-2'>
<img src="https://i.ibb.co/whSQ1DK/Frame-1.jpg" alt="" />{calories}
<img src="https://i.ibb.co/qB6MmFc/Frame.jpg" alt="" />{preparing_time}
</div>
    <div className="card-actions">

      <button onClick={()=>wantToCook(recipe)} className="btn btn-success rounded-full ">Want to Cook</button>
    </div>
  </div>
</div>
        </div>
    );
};
Recipie.PropTypes={
    recipe:PropTypes.object.isRequired,
    wantToCook: PropTypes.func.isRequired 
}
export default Recipie;