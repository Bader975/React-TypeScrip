import React from 'react'
interface CompaniesProps{
    companyname: string;
    workrs?: number;
    date: string;
    image?:string;
   
    
    
    }
function Companies(props:CompaniesProps) {
  return (
    <div className="companies">
        <h1>{props.companyname}</h1>
        <img src={props.image} alt="" width="200"></img>
        <h2>Number of employees {props.workrs}</h2>
         
        <h2>  The Year Founded {props.date}</h2>

        </div>
  )
}

export default Companies