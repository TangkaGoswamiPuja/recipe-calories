
import PropTypes from 'prop-types';

const Show = ({show}) => {
    const {recipe_name ,preparing_time ,calories}=show;
    return (
        <div>
            <h3></h3>

            <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td> <button className='btn btn-success w-16 '>Preparing</button></td>
      </tr>
     
    </tbody>
  </table>

  
        </div>
    );
};
Show.propTypes = {
show:PropTypes.object
};
export default Show;