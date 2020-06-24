import React from 'react'
import propTypes from 'prop-types';


 function profile(props) {
    const handleName =(props) => {
        alert(props.x.fullname)
    }
    return ( 
        <div className='Profile'>
        <h4 > <span className='name'>Fullname:</span> {props.x.fullname} </h4>
        <h4 > <span className='name'>Bio:</span> {props.x.bio} </h4>
        <h4 > <span className='name'>Profession:</span> {props.x.profession} </h4>  
        <img className="im" src={props.x.image}></img>
        
        </div>

    )
}
export default profile ;

   profile.propTypes ={
     Type :propTypes.string
   }
