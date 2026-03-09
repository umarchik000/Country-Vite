export default function Search({ selAll }) {

    const Filt = (arr) => {

        if (arr.length) {
           selAll(arr)
        } else {
            selAll([])
        }
    }

    const FilterIng = (evt) => {

        if (evt.key === "Enter") {

            if (evt.target.value) {
                fetch(`https://restcountries.com/v3.1/name/${evt.target.value}?fields=name,capital,region,population,flags`).then(res => res.json())
                    .then(data => Filt(data))
            } else {
                fetch(`https://restcountries.com/v3.1/all/?fields=name,capital,region,population,flags`).then(res => res.json())
                    .then(data => selAll(data))
            }

        }
    }



    return (
        <>
            <input onKeyUp={FilterIng} className="Search-Input" placeholder="Search your country..." type="text" />
            <img className="loopa" src="/src/assets/icons/search.svg" alt="" />
        </>
    )
}