import Show from "./Show";


const Side = ({table}) => {
    
    return (
        <div className="text-center">
           
           <div className="card w-96 bg-base-100 shadow-xl  ">
  <div className="card-body ">
    <h2 className="card-title ">Want to cook: {table.length}</h2>
    <hr />

{table.map(show=> <Show key={show.recipe_id}show={show}></Show>)}
   
  </div>
</div>
        </div>
    );
};

export default Side;