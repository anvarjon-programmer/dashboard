import React from 'react'
import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css'
import {addUser} from "@/app/lib/usersAction"

export default function AddUserPage() {
  return (
    <div className={styles.container}>
        <form action={addUser} className={styles.form}>
          <input type="text" placeholder='userName...' name='username' required />
          <input type="email" placeholder='email...' name='email' required />
          <input type="password" placeholder='password' name='password' required />
          <input type="phone" placeholder='phone' name='phone' />
          <select name="isAdmin" id="isAdmin">
            <option value={false}>is Admin</option>
            <option value={true}>yes</option>
            <option value={false}>no</option>
          </select>
          <select name="isActive" id="isActive">
            <option value={true}>is Active</option>
            <option value={true}>yes</option>
            <option value={false}>no</option>
          </select>
          <textarea name="address" id="adduser" rows="16" cols={20} placeholder='Address'></textarea>
          <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
