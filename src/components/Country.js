import React from "react";
import {  Link  } from "react-router-dom";
import countries from "../countries.json";

const Country = (props) => {
    console.log(props); // <= check `props` value
  
    const theCountry = countries.find((el) => {
      return el.cca3 === props.match.params.cca3; //AFG

    });

  
    return (

      <div>      
        {theCountry.name.common}
      </div>
    );
  };

  
  export default Country;