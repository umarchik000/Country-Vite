import { useParams } from "react-router-dom"
import FullCountry from "../components/_FullCountry"
import Header from "../components/_Header"
import { useEffect, useState } from "react";


export default function Single() {
    const [country, setCountry] = useState({})
    const { name } = useParams();

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders`)
            .then(resp => resp.json())
            .then(data => setCountry(data[0]))

    }, [name])



    return (
        <>
            <Header />
            <FullCountry country={country} />
        </>
    )



}