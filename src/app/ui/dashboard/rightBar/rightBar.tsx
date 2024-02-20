import React from 'react'
import styles from './rightBar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

export default function RightBar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          {/* <Image className={styles.bg} src="/fffff" alt='dsds' fill/> */}
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={styles.subtitle}>Takes 4 minute to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex delectus incidunt minima mollitia velit?
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 coming soon</span>
          <h3 className={styles.title}>Boost your productivity</h3>
          <span className={styles.subtitle}>Boost Your productivity</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex delectus incidunt minima mollitia velit?
          </p>
          <button className={styles.button}>
          <MdReadMore/>
            learn
          </button>
        </div>
      </div>
      
    </div>
  )
}
