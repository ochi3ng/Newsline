import { resolve } from "path";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getPost } from "../features/counter/counterSlice";
import { NewsDetails } from "./NewsDetails";
import { AppDispatch, RootState } from "./store"

export function Body(){
    const post =useSelector((state:RootState)=>state.counter)

    const dispatch:AppDispatch=useDispatch();
    useEffect(()=>{
        if(post.status !== "idle"){
            dispatch(getPost());
        }

    }, [post.status])
    return(
        <div className="newscontainer">
            {post.data.results.map((item)=><NewsDetails title={item.title} image={item.multimedia?.[1].url} section={item.section}/>)}
        </div>
    )
}