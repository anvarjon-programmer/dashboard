import React from 'react'
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'
import { fetchProduct } from '@/app/lib/data'
import { updateProduct } from '@/app/lib/productsAction'

export default async function SingleProductPage({params}:{params:{id:string}}) {
  const id = params?.id
  
  console.log(id);
  const product = await fetchProduct(id)
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={product?.img || "/noavatar.png"} alt='noavatar' fill/>
        </div>
        {product?.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input  type="hidden" name='id' value={product?.id} />
          <label>Title</label>
          <input defaultValue={product?.title} type="text" name='title' placeholder={product?.title} />
          <label>Price</label>
          <input defaultValue={product?.price} type="number" name='price' placeholder={product?.price}/>
          <label>Stock</label>
          <input defaultValue={product?.stock} type="number" name='stock' placeholder={product?.stock} />
          <label>Size</label>
          <textarea defaultValue={product?.size} name="size" placeholder={product?.size} ></textarea>
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen" selected={product?.kitchen}>Kitchen</option>
            <option value="computer" selected={product?.Computers}>Computers</option>
          </select>
          <textarea name="desc" id="desc" rows={10} placeholder={product?.desc}></textarea>
          <button>Updadate</button>
        </form>
      </div>
    </div>
  )
}
