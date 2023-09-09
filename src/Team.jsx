import { useState } from "react";

export default function Team (){
     const  [team,setTeam] = useState(11);

      const handleAdd = () =>{
         const newTeam = team +1 ;
         setTeam(newTeam);
      };
        const handleRemove = () =>{
           const   remove =  team - 1;
           setTeam(remove);
        };

      const teamStyle = {
               border:'2px solid purple',
                 margin:'15px',
                 padding:'15px',
                 borderRadius:'15px',
      };
    return(
      <div>
        <h3 style={
            teamStyle
        }>
            Players:{team}
        </h3>
        <button onClick={handleAdd}>
            Add
        </button>
        <button onClick={handleRemove}>
            Remove
        </button>
      </div>
    )
    
}