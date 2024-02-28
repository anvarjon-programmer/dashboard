import React from 'react'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import { FaUserAlt } from "react-icons/fa"
import Image from 'next/image'
import { fetchUsers } from '@/app/lib/data'
import { updateUser } from '@/app/lib/usersAction'

export default async function SingleUserPage({params}:{params:{id:string}}) {
  const id = params?.id
  const user = await fetchUsers(id)
  return (
    <div className={styles?.container}>
      <div className={styles?.infoContainer}>
         <div className={styles?.imgContainer}>
           <Image src={user?.img  || '/noavatar.png'} alt=';ii' fill/>
         </div>
         {user?.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name='id' value={user?.id} />
          <label>Username</label>
          <input type="text" name='username' placeholder={user?.username} />
          <label>Email</label>
          <input type="email" name='email' placeholder={user?.email} />
          <label>Password</label>
          <input type="password" name='password' />
          <label>Phone</label>
          <input type="text" name='phone' placeholder={user?.phone} />
          <label>Address</label>
          <textarea name="" id=""  placeholder={user?.address}></textarea>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user?.isAdmin}>Yes</option>
            <option value={true} selected={!user?.isAdmin}>No</option>
          </select>
          <label>is Active</label>
          <select name="isActive" id="isActive">
          <option value={true} selected={user?.isActive}>Yes</option>
          <option value={false} selected={!user?.isActive}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}
