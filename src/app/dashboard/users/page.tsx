import React from 'react'
import styles from "@/app/ui/dashboard/users/users.module.css"
import Link from 'next/link'
import { FaUser } from "react-icons/fa";
import Search from '@/app/ui/dashboard/search/search';
import Pagination from '../pagination/pagination';
import Image from 'next/image';

export default function Users() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user"/>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>
            Add New
          </button>
        </Link>
      </div>

          <table className={styles.table}>
            <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Create At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className={styles.user}>
                  <Image src="/noavatar.png" alt='user' width={40} height={40}/>
                  </div>
                </td>
                <td>john@gmail.com</td>
                <td>19.02.2024</td>
                <td>Admin</td>
                <td>active</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/1`}>
                      <button className={`${styles.button} ${styles.view}`}>view</button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>delet</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination/>
    </div>
  )
}
