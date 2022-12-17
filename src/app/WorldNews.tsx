type prop={
    title:string
    image:string
}
export function WorldNews ({title,image}: prop){
    return(
        <div className=" image-container">
            <h1>{title}</h1>
            <img className="newsImage" src={image}/>
        </div>
    )
}