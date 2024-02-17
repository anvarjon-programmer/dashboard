"use client";
import React, { ReactNode } from 'react'
import styles from './menueLink.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface SubItem {
    title: string;
    path: string;
    icon:ReactNode;
}
export default function MenueLink({menu}:Readonly<{menu:SubItem}>) {
    const pathname = usePathname();
  return (
    <div>
         <Link href={menu.path} className={`${styles.container} ${pathname === menu.path && styles.active}`}>
            {menu.icon}
            {menu.title}
         </Link>
    </div>
  )
}
