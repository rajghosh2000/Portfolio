import Link from "next/link"
import { Button } from "./ui/button"

// components
import Nav from "./Nav"

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">

                {/* LOGO */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Rajdeep<span className="text-accent">'</span>s
                    </h1>
                </Link>

                {/* DESKTOP NAVBAR */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                </div>

                {/* MOBILE NAVBAR */}
                <div className="xl:hidden">
                    mobile nav
                </div>
            </div>
        </header>
    )
}

export default Header