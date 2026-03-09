import { useEffect, useState } from 'react';

export default function Filter({selAll}) {

    const [regions, setRegions] = useState("Filter by region");
    const  [reg, setReg] = useState(false)

    console.log(regions);



    const Reg = (evt) => {

        if (evt.target.textContent !== undefined && evt.target.textContent !== "Regions") {
            setRegions(evt.target.textContent)
            fetch(`https://restcountries.com/v3.1/region/${evt.target.textContent}?fields=name,capital,region,population,flags`).then(res => res.json()).then(data => selAll(data))
            setReg(false)    
        }  {
            
        }

    }


    return (
        <>
            <div onClick={() => { setReg(!reg)}} className="filter">
                <div className="Reg">
                <h1 onClick={() => setReg(!reg)}>{regions}</h1>
                {/* <img src="" alt="" /> */}
                </div>
                <div  className={reg ? "RegList open" : "RegList"} >
                    <h1 onClick={Reg}>Asia</h1>
                    <h1 onClick={Reg}>Europe</h1>
                    <h1 onClick={Reg}>Africa</h1>
                    <h1 onClick={Reg}>Americas</h1>
                    <h1 onClick={Reg}>Antarctic</h1>
                    <h1 onClick={Reg}>Oceania</h1>
                </div>
            </div>
        </>
    )

}