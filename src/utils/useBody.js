import { useEffect } from "react";
const useBody=(listOfRestaurants,setlistOfRestaurants,filteredRestaurants,setfilteredRestaurants)=>{
       useEffect(()=>{
    fetchdata();
    },[])

    const fetchdata = async()=>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7121748&lng=83.30310329999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await data.json();
       setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return [listOfRestaurants,filteredRestaurants];
}
export default useBody