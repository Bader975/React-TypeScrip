import React from 'react'
interface ServicesProps{
    services?: string;
    prices?: number; 
    image?:string,
    
    
    }
function Services(props: ServicesProps) {
  return (
    <div className="services">
  <h1>{props.services}</h1>
        <img src={props.image} alt="" width="500"></img>
        <h2>  {props.prices} SAR </h2>
       
    </div>
  )
}

export default Services