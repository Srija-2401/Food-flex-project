import { useEffect, useState } from "react"
import { MENU_API } from "./constants";


const useResMenu =(resId)=>{

    const[resInfo,setresInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu =async()=>{
      const data = await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER")
      const json = await data.json();
      setresInfo(json?.data);
    }
    return resInfo;

}
export default useResMenu