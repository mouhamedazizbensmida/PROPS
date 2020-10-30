
import React from "react";
import "./App.css";
import Profile from "./profile/Profile";
import './style.css';
import imge from './th.jpg';
function App () {
const styleObject={ display:"flex",justifyitems: "center" }
const card={  height: "100%",border: "solid green",width:"8cm"}
  return (
    <center>
  <div style={styleObject}>
<div style={card}className="container">
<Profile name={'aziz'} Fullname={'aziz ben smida'} bio={'hhhhh'} profession={'informatique'}>
<img src= {imge} alt='me'/>
</Profile>
</div>
<div style={card} className="container">
<Profile name={'aziz'} Fullname={'aziz ben smida'} bio={'hhhhh'} profession={'informatique'}>
<img src= {imge} alt='me'/>
</Profile>
</div>
<div style={card} className="container">
<Profile >
<img src= {imge} alt='me'/>
</Profile>
</div>
  </div>
  </center>
  );
};
export default App;