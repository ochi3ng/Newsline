
type prop={
    title: string
    image: string
}
export function NewsDetails ({title,image}: prop) {
return(
    <div className="image-container">
         <img className="image" src={image}/>
         <h1>{title}</h1>
    </div>
)
}