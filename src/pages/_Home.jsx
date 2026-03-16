import { useEffect, useState } from 'react'
import Country from '../components/_Country';
import Countries from '../components/_Countries';
import FilterSearch from '../components/_FIlterSearch';

 function Home() {



    const [All, selAll] = useState([])
    const FetchUrl = "https://restcountries.com/v3.1/all/?fields=name,capital,region,population,flags";

    useEffect(() => {
        fetch(FetchUrl).then(resp => resp.json()).then(data => selAll(data))
    }, [selAll])





    return (
        <>
            <FilterSearch selAll={selAll} />

            <div className="container">
                <Country>
                    {
                        All.map((item) => (
                            <Countries key={item.name.common} item={item} />
                        ))
                    }
                </Country>
            </div>
        </>
    )


}

export default Home