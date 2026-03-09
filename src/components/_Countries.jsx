import { Link } from "react-router-dom"

export default function Countries({ item }) {

    const { region, population, capital, flags, name } = item

    return (
        <li >
            <Link to={`/single/${name.common}`} >
                <img src={flags.png} alt={flags.alt} />
                <h1><span>Country:</span> {name.common}</h1>
                <div>
                    <p><span>Capital: </span> {capital[0]}</p>
                    <p><span>Population: </span> {population}</p>
                    <p><span>Region: </span> {region}</p>
                </div>
                </Link>
        </li>
    )
}