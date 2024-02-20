import React from 'react'
import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

export default function SingleProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt='noavatar' fill/>
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name='title' placeholder='title' />
          <label>Price</label>
          <input type="number" name='price' placeholder='price'/>
          <label>Stock</label>
          <input type="number" name='stock' placeholder='stock' />
          <label>Color</label>
          <input type="text" name='color' placeholder='color' />
          <label>Size</label>
          <textarea name="size" placeholder='size' ></textarea>
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computers</option>
          </select>
          <textarea name="desc" id="desc" rows={10} placeholder='description'></textarea>
          <button>Updadate</button>
        </form>
      </div>
    </div>
  )
}
