import React from 'react'
import CabinBox from '../components/CabinBox'
import Style from "../Styles/Premium.module.css"
const PremiumCabin = () => {
  return (
    <div className={Style.premium}>
      <div>
        <h1 style={{
          textAlign:"center",
          textDecoration:'underline',
          color:"#9b1f4b"
        }}>Premium Cabins</h1>
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

export default PremiumCabin