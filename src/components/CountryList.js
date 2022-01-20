import { Link } from "react-router-dom";
import country from "../countries.json" ;

const CountryList = (props) => {
    return (

        <ul>
            
            {country.map( (el) => {
                return (<li><Link to={`/${el.cca3}`}>{el.name.common}</Link></li>)
            } )}
        </ul>
    ) 
}

export default CountryList;