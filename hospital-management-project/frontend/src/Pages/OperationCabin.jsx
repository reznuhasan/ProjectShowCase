import React from 'react'
import Styles from "../Styles/Premium.module.css"
import CabinBox from '../components/CabinBox'
const OperationCabin = () => {
  return (
    <div className={Styles.premium}>
      <div>
        <h1 style={{
          textAlign:"center",
          textDecoration:'underline',
          color:"#9b1f4b"
        }}>Operation Cabins</h1>
      </div>
      <CabinBox cabin={{
        room:400,
        floor:3,
        date:"now",
        price:400,
        bed:1,
        facilities:{
          nurse:2,
          servent:3,
          ac:1,
          tv:1,
          foods:"4 times"
        }
      }}/>
      <CabinBox cabin={{
        room:400,
        floor:3,
        date:"now",
        price:400,
        bed:1,
        facilities:{
          nurse:2,
          servent:3,
          ac:1,
          tv:1,
          foods:"4 times"
        }
      }}/>
      <CabinBox cabin={{
        room:400,
        floor:3,
        date:"now",
        price:400,
        bed:1,
        facilities:{
          nurse:2,
          servent:3,
          ac:1,
          tv:1,
          foods:"4 times"
        }
      }}/>
      <CabinBox cabin={{
        room:400,
        floor:3,
        date:"now",
        price:400,
        bed:1,
        facilities:{
          nurse:2,
          servent:3,
          ac:1,
          tv:1,
          foods:"4 times"
        }
      }}/>
      <CabinBox cabin={{
        room:400,
        floor:3,
        date:"now",
        price:400,
        bed:1,
        facilities:{
          nurse:2,
          servent:3,
          ac:1,
          tv:1,
          foods:"4 times"
        }
      }}/>
      <CabinBox cabin={{
        room:400,
        floor:3,
        date:"now",
        price:400,
        bed:1,
        facilities:{
          nurse:2,
          servent:3,
          ac:1,
          tv:1,
          foods:"4 times"
        }
      }}/>
    </div>
  )
}

export default OperationCabin