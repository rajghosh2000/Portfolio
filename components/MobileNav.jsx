"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "about",
        path: "/about"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "skills",
        path: "/skills"
    },
    {
        name: "publications",
        path: "/publications"
    },
    {
        name: "patents",
        path: "/patents"
    },
    {
        name: "contact",
        path: "/contact"
    },
]

const MobileNav = () => {

    const pathName = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className="mt-20 mb-20 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Rajdeep<span className="text-accent">'</span>s
                        </h1>
                    </Link>
                </div>
                {/* Navbar */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`${link.path === pathName && "text-accent border-b-2 border-accent"
                                    } capitalize font-medium hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;