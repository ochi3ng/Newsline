import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getPost } from "../features/counter/counterSlice";
import { AppDispatch, RootState } from "./store"
import { WorldNews } from "./WorldNews";

export function World(){
    const News=useSelector((state:RootState)=>state.counter)

    const dispatch:AppDispatch=useDispatch();
    useEffect(()=>{
        if(News.status !=="idle"){
            dispatch(getPost());
        }
    }, [News.status])
return(
    <div className="newscontainer">
    {News.data.results.map((item)=><WorldNews title={item.title} image={item.multimedia?.[1].url}/>)}
    </div>
)
}