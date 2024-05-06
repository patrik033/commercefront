"use client";
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
    ChevronDownIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';

// Define your nested links
const nestedTobacco = [
    { name: 'Cigaretter', href: '/products/tobacco/cigarettes' },
    { name: 'Snus', href: '/products/tobacco/snus' },
];

const nestedDrycker = [
    { name: 'Dricka', href: '/products/drycker/dricka' },
    { name: 'Energidricka', href: '/products/drycker/energy' },
]

const nestedGodis = [
    { name: 'Lösgodis', href: '/products/candy/losgodis' },
    { name: 'Godis', href: '/products/candy/godis' },
]

const nestedKryddor = [
    { name: 'Peppar', href: '/products/kryddor/peppar' },
    { name: 'Örtmixer', href: '/products/kryddor/ortmixer' },
    { name: 'Grillkryddor', href: '/products/kryddor/grillkryddor' },
    { name: 'Örter', href: '/products/kryddor/orter' },
    { name: 'Salladskryddor', href: '/products/kryddor/salladskryddor' },

]



// Map of links to display in the side navigation.
const links = [
    {
        name: 'Home',
        href: '/',
        icon: HomeIcon
    },
    {
        name: "Drycker",
        href: "/products/drycker",
        icon: DocumentDuplicateIcon,
        nested: nestedDrycker
    },
    {
        name: 'Godis',
        href: '/products/candy',
        icon: DocumentDuplicateIcon,
        nested: nestedGodis
    },
    {
        name: 'Tobak',
        href: '/products/tobacco',
        icon: UserGroupIcon,
        nested: nestedTobacco, // Assign nested links
    },
    {
        name: "Kryddor",
        href: "/products/kryddor",
        icon: DocumentDuplicateIcon,
        nested: nestedKryddor
    }
];

export default function NavLinks() {
    const pathname = usePathname();
    const [expandedLink, setExpandedLink] = useState('');







    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <div key={link.name}>
                        <Link href={link.href}>
                            <div
                                className={clsx(
                                    'flex h-[48px] items-center justify-between rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 cursor-pointer',
                                    {
                                        'bg-sky-100 text-blue-600': pathname === link.href,
                                    },
                                )}
                                onClick={() => {
                                    if (expandedLink === link.name) {
                                        setExpandedLink('');
                                    } else {
                                        setExpandedLink(link.name);
                                    }
                                }}
                            >
                                <LinkIcon className="w-6" />
                                <p className="hidden md:block">{link.name}</p>
                                {link.nested && (
                                    <ChevronDownIcon
                                        className={clsx(
                                            'w-5 h-5 ml-2 transition-transform transform md:hidden',
                                            { 'rotate-180': expandedLink === link.name },
                                        )}
                                    />
                                )}
                            </div>
                        </Link>
                        {link.nested && (
                            <div className={clsx({ 'block': expandedLink === link.name, 'hidden': expandedLink !== link.name })}>
                                {link.nested.map((nestedLink) => (
                                    <Link
                                        key={nestedLink.name}
                                        href={nestedLink.href}
                                        onClick={() => setExpandedLink('')}
                                        className={clsx(
                                            'flex h-[48px] items-center justify-start rounded-md bg-gray-100 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                                            {
                                                'bg-sky-100 text-blue-600': pathname === nestedLink.href,
                                            },
                                        )}
                                    >
                                        <p>{nestedLink.name}</p>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    );
}