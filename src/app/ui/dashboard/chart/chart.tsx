"use client"
import { LineChart,Line,XAxis,YAxis,Tooltip,Legend,ResponsiveContainer } from "recharts"
import styles from "./chart.module.css"

const data = [
  {
    name:"Sun",
    visit:4000,
    click:2400,
  },
  {
    name:"Mon",
    visit:3000,
    click:1938,
  },{
    name:"Tue",
    visit:2000,
    click:3800,
  },{
    name:"Sun",
    visit:4000,
    click:2400,
  },
  {
    name:"Sun",
    visit:4000,
    click:2400,
  },{
    name:"Sun",
    visit:4000,
    click:2400,
  },{
    name:"Sun",
    visit:3000,
    click:600,
  },
]
export default function Chart() {
  return (
    // <>
    // <div className={styles.container}>
    //   <h2 className={styles.title}>Weekly React</h2>
    //   <ResponsiveContainer width="100%" height="90%" >
    //     <LineChart
    //     width={500}
    //     height={300}
    //     data={data}
    //     margin={{
    //       top:5,
    //       right:30,
    //       left:20,
    //       bottom:5
    //     }}
    //     />
    //     <XAxis dataKey="name"/>
    //     <YAxis/>
    //     <Tooltip contentStyle={{background: "#151c2c",border:"none"}}/>
    //     <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5"/>
    //     <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2"/>
    //   </ResponsiveContainer>
    // </div>
    // </>

    <div className={styles.container}>
      <h2 className={styles.title}>Weekly React</h2>
        <ResponsiveContainer width="100%" height="90%">
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
        <Tooltip contentStyle={{background: "#151c2c",border:"none"}}/>
      <Legend />
      <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="click" stroke="#82ca9d"  strokeDasharray="3 4 5 2"/>
    </LineChart>
  </ResponsiveContainer>
    </div>
    
  )
}
