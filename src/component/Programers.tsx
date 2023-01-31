import React from 'react'
interface ProgramersProps{
    name?: string;
    companyname?: string;
    languages?: string;
    experience?: number;
    image?: string;

    
    
    }
    
function Programers(props:ProgramersProps) {
  return (
    <div className="programers-card">
      <h1>{props.name}</h1>
      <img src={props.image} alt="" width="100"></img>
      <h3>{props.companyname}</h3>
        <ul>{props.languages}</ul>
        <p>{props.experience}</p>
       
        
    
    </div>
  )
}

export default Programers;