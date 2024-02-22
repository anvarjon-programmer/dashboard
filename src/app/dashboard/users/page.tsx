import React from 'react'
import styles from "@/app/ui/dashboard/users/users.module.css"
import Link from 'next/link'
import Search from '@/app/ui/dashboard/search/search';
import Pagination from '../pagination/pagination';
import Image from 'next/image';
import { fetchUser } from '@/app/lib/data';
export default async function Users({searchParams}:{searchParams:{q:string}}) {
  const q = searchParams?.q || ""
  const users = await fetchUser(q)
  console.log(users);
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
              {
                users?.map((user)=>(
              <tr key={user._id}>
                <td>
                  <div className={styles.user}>
                  <Image src={user.img || "/noavatar.png"} alt='user' width={40} height={40}/>
                  {user?.usernmae}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user?.createdAt?.toString().slice(4,16)}</td>
                <td>{user?.isAdmin ? "admin" :"Client"}</td>
                <td>{user?.isActive ? 'Active' : 'Passive'}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user._id}`}>
                      <button className={`${styles.button} ${styles.view}`}>view</button>
                    </Link>
                    <button className={`${styles.button} ${styles.delete}`}>delet</button>
                  </div>
                </td>
              </tr>
              ))
            }
            </tbody>
          </table>
          <Pagination/>
    </div>
  )
}
