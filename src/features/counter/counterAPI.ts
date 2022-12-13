import axios from "axios";
import { url } from "inspector";
import { type } from "os";
import { useEffect, useState } from "react";

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
type News={

  results:any[]

}
export async function FetchData():Promise< News>{
  // const [newsData,setNewsData]=useState({} as News)
  const Url="https://api.nytimes.com/svc/topstories/v2/home.json?api-key=SkrAvDwdsMERKJLJ4enVtSFC3u4vqA48"

 const newsData : News = await  axios.get(Url).then(res =>  res.data).catch(err=>console.log(err))
 return newsData
}