import React from "react"
import Link from "next/link"

function NavBar() {
    return (
    <div className="containe">
        <nav className="navBar">
            <Link href="/">
                <a>Letoli</a>
            </Link>
            
            <div>
                <input
                    className="navForm"
                    placeholder="Recherche"
                    title="Search bar"
                    type="text"
                />
            </div>
        </nav>
    </div>
    )
}

export default NavBar;