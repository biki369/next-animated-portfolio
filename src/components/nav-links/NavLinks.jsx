"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = props => {
    const { text, url } = props.link;
    const pathName = usePathname();
    // console.log(pathName);

    return (
        <>
            <Link className={`rounded p-1 ${pathName === url && 'bg-black text-white'}`} href={url}>{text}</Link>
        </>
    )
}

export default NavLinks
