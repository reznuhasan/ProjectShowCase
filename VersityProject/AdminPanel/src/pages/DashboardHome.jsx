import React, { useContext, useEffect, useState } from 'react'
import { dashboardCardComponent } from '../CustomData/DashboardData'
import Card from '../components/Card'
import Styles from "../styles/DashboardHome.module.css"
import { StudentContext } from '../ContextHook/StudentDataProvider'
const DashboardHome = () => {
    const [cardComponent,setCardComponent] =useState([])
    useEffect(()=>{
        const loadData=()=>{
            setCardComponent(dashboardCardComponent)
        }
        loadData();
    },[])
    const {initialStudentData}=useContext(StudentContext)
    console.log(initialStudentData)
    if(cardComponent.length===0) return <h1>Loading...</h1>
  return (
    <div className={Styles.dashboardHome}>
        {
            cardComponent.map((cardData,index)=><Card key={index} value={index} cardData={cardData}></Card>)
        }
    </div>
  )
}

export default DashboardHome