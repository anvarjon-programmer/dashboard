import React from 'react'
import styles from "../ui/dashboard/dashboard.module.css"
import Card from '../ui/dashboard/card/card'
import { Transaction } from '../ui/dashboard/transaction/transaction'
import Chart from '../ui/dashboard/chart/chart'
import RightBar from '../ui/dashboard/rightBar/rightBar'
export default function Dashboard () {
  return (
    <div className={styles.wraper}>
        <div className={styles.main}>
          <div className={styles.cards}>
            <Card/>
            <Card/>
            <Card/>
          </div>
          <Transaction/>
          <Chart/>
        </div>
        <div className={styles.side}>
          <RightBar/>
        </div>
     </div>
  )
}
