import React from "react"
import Link from "next/link"

function NavBar() {
    return (
        <nav className="navBar">
            <Link href="/">
                <a>Letoli</a>
            </Link>
            
            <div>
                <p>Search Bar</p>
            </div>
        </nav>
    )
}

export default NavBar;