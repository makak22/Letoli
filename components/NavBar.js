import React from "react"
import Link from "next/link"
import { toli } from '../public/data/ladatabase';

function NavBar() {
    const mots = toli
    const [searchValue, setSearchValue] = React.useState("");
    
    const filteredData = mots.filter((item) => {
        return item.attributes.mot.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0} )
    
    const lesMots = filteredData.sort((a, b) => a.attributes.mot.localeCompare(b.attributes.mot))
    const toggle = () => setSearchValue("");
    return (
    <div>
        <div className="containe">
        <div className="content">
            <nav className="navBar">
                <Link href="/">
                    <a onClick={toggle}>LETOLI</a>
                </Link>
            </nav>   
                <div>
                    <input
                        className="navForm"
                        placeholder="Recherche"
                        title="Search bar"
                        type="text"
                        onChange={({ target: { value } }) => setSearchValue(value)}
                        value={searchValue}
                        
                    />
                </div>
        </div>       
        </div>

    {searchValue.length != 0 &&(
        <div className='navContainer'>
            <div className='results' >
                {lesMots.slice(0, 10).map((mot) =>(

                    <div key={mot.id}>
                        <Link href={`/definition/${mot.id}`}>
                            <h3 onClick={toggle}>{mot.attributes.mot}</h3>
                        </Link>
                    </div>
                    ))}
                {lesMots.length != 0 ? "" : <h3>Aucun resultat</h3> }
        
            </div>
        </div>
    )}
    </div>
    )
}

export default NavBar;