"use client";

import classNames from "@/utils/classNames";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const NavLink = ({ children, href, activeClassName, exect = false, ...props }) => {
    const path = usePathname()
    const active = exect ? path == href : path.startsWith(href)
    const classes = classNames(props, active && activeClassName)
    if (classes) {
        props.className = classes
    }
    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};

export default NavLink;