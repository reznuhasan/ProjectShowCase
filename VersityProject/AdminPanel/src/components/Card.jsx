import { Link } from "react-router-dom"
import Styles from "../styles/Card.module.css"
const Card = ({cardData}) => {
    const {url,title,text}=cardData
  return (
    <div  className={Styles.cardComponent}>
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