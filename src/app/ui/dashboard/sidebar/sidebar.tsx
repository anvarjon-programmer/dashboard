import React, { ReactNode } from 'react'
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelp,
  MdHelpCenter,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md"; 
import styles from './sidebar.module.css'
import MenueLink from './menueLink/menueLink';
import { CiUser } from 'react-icons/ci';
import { FaUserAlt } from 'react-icons/fa';
interface menueItem {
  title:string;
  list:SubMenuItem[];
}

interface SubMenuItem {
  title: string;
  path:string;
  icons: ReactNode;
}
const menueItems:menueItem[] = [
  {
    title:"Pages",
    list: [
      {title: "Dashboard",
      path: "/dashboard",
      icons: <MdDashboard/>,
      },
      {title: "Users",
      path: "/dashboard/users",
      icons: <MdSupervisedUserCircle/>,
      },
      {title: "Products",
      path: "/dashboard/products",
      icons: <MdShoppingBag/>,
      },
      {title: "Transactions",
      path: "/dashboard/transactions",
      icons: <MdShoppingBag/>,
      },

    ]
  },
  {
    title:"Analytics",
    list: [
      {title: "Revenue",
      path: "/dashboard/revenue",
      icons: <MdWork/>,
      },
      {title: "Reports",
      path: "/dashboard/reports",
      icons: <MdAnalytics/>,
      },
      {title: "Products",
      path: "/dashboard/",
      icons: <MdShoppingBag/>,
      },
      {title: "Teams",
      path: "/dashboard/teams",
      icons: <MdPeople/>,
      },

    ]
  },
  {
    title:"User",
    list: [
      {title: "Settings",
      path: "/dashboard/settings",
      icons: <MdOutlineSettings/>,
      },
      {title: "Help",
      path: "/dashboard/help",
      icons: <MdHelpCenter/>,
      }

    ]
  }
]

export default function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
       <FaUserAlt  className={styles.userImg} />
        <div className={styles.userDetail}>
          <span className={styles.userDetail}>John Doe</span>
          <span className={styles.userTitle}>Adminstrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {
          menueItems.map((item,index) =>(
            <li key={index}>
              <span className={styles.cat}>{item.title}</span>
              {
                item.list.map(list =>(
                  <MenueLink key={list.title} menu={list}/>
                ))
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}
