import React from 'react'
import styles from "@/app/ui/dashboard/users/users.module.css"
import Link from 'next/link'
import Search from '@/app/ui/dashboard/search/search';
import Pagination from '../../ui/dashboard/pagination/pagination';
import Image from 'next/image';
import { fetchUser } from '@/app/lib/data';
import { IUserPromise } from '../types/users';
import { deleteUser } from '@/app/lib/usersAction';
export default async function Users({searchParams}:{searchParams:{query:string, page:string}}) {
  const q = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1
  const results:IUserPromise | undefined = await fetchUser(q,page)
  console.log(results);
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
                results?.users?.map((user)=>(
              <tr key={user._id}>
                <td>
                  <div className={styles.user}>
                  <Image className={styles.userImage} src={user.img || "/noavatar.png"} alt='user' width={40} height={40}/>
                  {user?.username}
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
                     <form action={deleteUser}>
                      <input type="text" hidden name='id' value={user._id}/>
                     <button className={`${styles.button} ${styles.delete}`}>delet</button>
                     </form>
                  </div>
                </td>
              </tr>
              ))
            }
            </tbody>
          </table>
          <Pagination count={results?.count}/>
    </div>
  )
}
