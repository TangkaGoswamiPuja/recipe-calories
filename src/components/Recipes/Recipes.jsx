import { useEffect } from "react";
import { useState } from "react";
import Recipie from "../../Recipie";


const Recipes = ({wantToCook}) => {
    const [recipes,setRecipes]= useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setRecipes(data))
    },[]) 

    return (
       
         <div >
    
<div className='grid grid-cols-1 
lg:grid-cols-2 gap-3'>
{ recipes.map(recipe=><Recipie key={recipe.recipe_id} recipe={recipe} wantToCook={wantToCook}></Recipie>)}

</div>

    </div>
       
    );
};

export default Recipes;