import React from 'react'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '../pagination/pagination'
export default function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for product ...'/>
        <Link href='/dashboard/products/add'>
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Create Att</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.product}>
                  <Image src="/noavatar.png" alt='noavatar' width={40} height={40} className={styles.product}/>
                  Iphone
                </div>
              </td>
              <td>Description</td>
              <td>$12000</td>
              <td>12.02.2024</td>
              <td>33</td>
              <td>
                <div className={styles.buttons}>
                  <Link href='/dashboard/products/test'>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination/>
    </div>
  )
}
