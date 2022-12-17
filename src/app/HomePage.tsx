import { useNavigate } from "react-router-dom"
type prop={
    title: string
    image: string
    section:string
}
export function HomePage ({title,image,section}: prop) {
    const navigate=useNavigate()
    const MoreDetails=()=>{
        navigate('/more')
    }
return(
    <div className="image-container">
        <h1 className="">{section}</h1>
         <img className="image" src={image}/>
         <h2 className="title" onClick={MoreDetails}>{title}</h2>
    </div>
)
}