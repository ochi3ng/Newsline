import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getPost } from "../features/counter/counterSlice";
import { HomePage } from "./HomePage";
import { AppDispatch, RootState } from "./store"

export function Home(){
    const News=useSelector((state:RootState)=>state.counter)

    const dispatch:AppDispatch=useDispatch();
    useEffect(()=>{
        if(News.status !=="idle"){
            dispatch(getPost());
        }
    }, [News.status])
return(
    <div className="newscontainer">
     {News.data.results.map((item)=><HomePage title={item.title} image={item.multimedia?.[1].url} section={item.section}/>)}
    </div>
)
}