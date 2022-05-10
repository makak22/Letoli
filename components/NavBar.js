import React from "react"
import Link from "next/link"

function NavBar() {
    return (
    <div className="containe">
        <div className="content">
            <nav className="navBar">
                <Link href="/">
                    <a>Letoli</a>
                </Link>
            </nav>   
                <div>
                    <input
                        className="navForm"
                        placeholder="Recherche"
                        title="Search bar"
                        type="text"
                    />
                </div>
         </div>       
    </div>
    )
}

export default NavBar;