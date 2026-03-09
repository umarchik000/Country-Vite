import Filter from "./_Filter";
import Search from "./_Search";

export default function FilterSearch({selAll}) {
    return (
        <>
            <div className="container">
                <div className="Filter_Search">
                    <Search selAll={selAll} />
                    <Filter selAll={selAll} />
                </div>
            </div>
        </>
    )
}