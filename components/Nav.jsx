"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
    const pathName = usePathname();

    return (
        <nav className="flex gap-8">
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
    );
}

export default Nav