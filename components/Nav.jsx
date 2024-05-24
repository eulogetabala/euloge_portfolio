"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

const links = [
    {
        name: 'Accueil',
        path: '/'

    },

    {
        name: 'services',
        path: '/services'

    },
    {
        name: 'parcours',
        path: '/resume'

    },
    {
        name: 'realisations',
        path: '/work'

    },
    {
        name: 'contact',
        path: '/contact'

    },
]

const Nav = () => {
    const pathname = usePathname();
    
  return (
    <nav className="flex gap-8">
        {links.map((link, index)=>{
            return <Link href={link.path} Key={index} className={`
            ${link.path === pathname && "text-accent border-b-2 border-accent "} font-medium capitalize hover:text-accent`}>
                {link.name}
                </Link>
        })}
    </nav>
  )
}

export default Nav