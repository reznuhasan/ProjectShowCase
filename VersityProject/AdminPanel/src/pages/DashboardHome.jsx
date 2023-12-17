import React, { useEffect, useState } from 'react'
import { dashboardCardComponent } from '../CustomData/DashboardData'
import Card from '../components/Card'
import Styles from "../styles/DashboardHome.module.css"
const DashboardHome = () => {
    const [cardComponent,setCardComponent] =useState([])
    useEffect(()=>{
        const loadData=()=>{
            setCardComponent(dashboardCardComponent)
        }
        loadData();
    },[])
    if(cardComponent.length===0) return <h1>Loading...</h1>
  return (
    <div className={Styles.dashboardHome}>
        {
            cardComponent.map((cardData,index)=><Card key={index} cardData={cardData}></Card>)
        }
    </div>
  )
}

export default DashboardHome