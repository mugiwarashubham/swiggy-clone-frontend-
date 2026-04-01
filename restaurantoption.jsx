import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";


export default function Restaurant(){
   
    const [RestData, setRestData] = useState([])

    useEffect(()=>{
    
     async function fetchData() {
        
        const proxyServer = "https://cors-anywhere.herokuapp.com/";
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
       const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }

     fetchData();
    },[])

    // console.log(RestData);
   
    // Shimmer Effect 
    if(RestData.length==0)
        return <Shimmer></Shimmer>

    return (
        <div>
           
            <div className="mt-20 mb-5 mx-38">
            <p className="text-2xl mt-20 mb-5 font-bold ">Top restaurant chains in Delhi</p>
            </div>
        <div className="flex flex-wrap w-[80%] mx-auto mt-5 gap-5">
            
            {
                RestData.map((restInfo)=><RestCard key={restInfo?.info?.id} restInfo={restInfo}></RestCard>)
            }

        </div>
        </div>
    )

}