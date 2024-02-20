import React from 'react'
import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import { FaUserAlt } from "react-icons/fa"
import Image from 'next/image'

export default function SingleUserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
         <div className={styles.imgContainer}>
           <Image src='/noavatar.png' alt=';ii' fill/>
         </div>
         John Doe
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" name='username' placeholder='username' />
          <label>Email</label>
          <input type="email" name='email' placeholder='email' />
          <label>Password</label>
          <input type="password" name='password' />
          <label>Phone</label>
          <input type="text" name='phone' placeholder='phone' />
          <label>Address</label>
          <textarea name="" id=""  placeholder='address'></textarea>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={true}>No</option>
          </select>
          <label>is Active</label>
          <select name="isActive" id="isActive">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}
