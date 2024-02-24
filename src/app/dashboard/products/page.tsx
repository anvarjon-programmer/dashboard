import React from 'react'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import { fetchProducts } from '@/app/lib/data'
import { IProductPromise } from '../types/products'
export default async function Products({searchParams}:{searchParams:{query:string, page:string}}) {
  const q = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1
  const results:IProductPromise | undefined = await fetchProducts(q,page)
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
            {
              results?.products?.map((product) =>(
                <tr key={product._id}>
              <td>
                <div className={styles.product}>
                  <Image src={product.img} alt='noavatar' width={40} height={40} className={styles.product}/>
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product?.createdAt?.toString()?.slice(4,16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href='/dashboard/products/test'>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
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
