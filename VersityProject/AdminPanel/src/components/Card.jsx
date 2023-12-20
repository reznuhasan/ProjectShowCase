import { Link } from "react-router-dom"
import Styles from "../styles/Card.module.css"
const Card = ({cardData,value}) => {
    const {url,title,text}=cardData
  return (
    <div  className={(value%2==0)?Styles.cardComponent1:Styles.cardComponent2}>
        {url?
        <Link to={url}>
            <h2>{title}</h2>
        </Link>:
        <h2>{title}</h2>
        }
        <p>{text}</p>
    </div>
  )
}

export default Card