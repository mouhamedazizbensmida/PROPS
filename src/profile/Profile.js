import React from "react";
import PropTypes from "prop-types";

const Profile =props=>{
    function name(){
      
alert(props.name)
        
    }
  return (
      
    
        
    <div className="card-body">
   
    {props.children}
      <h2>{props.Fullname}</h2> <br/>
      <h3>{props.bio}</h3><br/>
      <h3>{props.profession}</h3><br/>
     <a href="/" onClick={name}>
         Name of profile user
     </a>
    </div>
 
   
  );
};
Profile.defaultProps={
    Fullname:"aziz ben smida",
    bio:"klem",
    profession:"professeur",
    name:"aziz",
    
};
Profile.propTypes ={
    Fullname:PropTypes.string,
    bio:PropTypes.string,
    profession :PropTypes.string,
    name:PropTypes.string,
}
export default Profile;