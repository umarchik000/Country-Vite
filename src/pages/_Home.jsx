import { useEffect, useState } from 'react'
import Country from '../components/_Country';
import Countries from '../components/_Countries';
import Header from '../components/_Header';
import FilterSearch from '../components/_FIlterSearch';

 function Home() {



    const [All, selAll] = useState([])
    const FetchUrl = "https://restcountries.com/v3.1/all/?fields=name,capital,region,population,flags";

    useEffect(() => {
        fetch(FetchUrl).then(resp => resp.json()).then(data => selAll(data))
    }, [selAll])





    return (
        <>
            <Header />
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