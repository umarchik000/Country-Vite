
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"

export default function FullCountry({ country }) {

    const navigate = useNavigate();
    const [borderCountries, setBorderCountries] = useState([])
    const { region, population, capital, flags, name, tld, subregion, languages, currencies, borders } = country


    useEffect(() => {
        if (!borders?.length) return

        fetch(`https://restcountries.com/v3.1/alpha?codes=${borders.join(",")}`)
            .then(res => res.json())
            .then(setBorderCountries)

    }, [borders])

    const borderList = borderCountries?.map(country => (
        <Link
            key={country.cca3}
            to={`/single/${country.name.common}`}
        >
            {country.name.common}
        </Link>
    ))

    return (
        <>
            <h3 className="Back" onClick={() => navigate(-1)}> <img src="/src/assets/icons/call-made.svg" alt="" />   Back</h3>
            <div class="container">
                <div class="Full-info-country">
                    <img className="Country-Img" src={flags?.png} alt="" />
                    <div className="Full-Info-Country">
                        <h1>{name?.common}</h1>
                        <div className="FIC-context">
                            <h1>
                                Native Name: <span>{name?.common}</span> <br />
                                Population: <span>{population}</span>  <br />
                                Region: <span>{region}</span> <br />
                                Sub Region: <span>{subregion}</span> <br />
                                Capital: <span>{capital}</span>
                            </h1>
                            <h1 class="FIC-content">
                                Top Level Domain: <span>{tld}</span> <br />
                                Currencies: <span>{Object.values(currencies || {})[0]?.name}</span> <br />
                                Languages: <span>{Object.values(languages || {})[0]}</span>
                            </h1>
                        </div>
                        <div className="border-countries">
                            <h1>Border Countries:</h1>
                            {borderList.length ? borderList : <span>No borders</span>}
                        </div>
                    </div>
                </div>
                <div class="indent"></div>
            </div>
        </>
    )
}