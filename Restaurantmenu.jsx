import { useParams } from "react-router";
import { useEffect, useState } from "react";
import MenuCard from "./Menucard";
export default function Restaurantmenu(){
    const {id}=useParams(); //useparam id ki value layega 

    const [RestData, setRestData] = useState([])
     useEffect(()=>{
        
            async function fetchData() {
               
               const proxyServer = "https://cors-anywhere.herokuapp.com/"
               const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
               const response = await fetch(proxyServer+swiggyAPI);
               const data = await response.json();
               const tempdata=data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
               const filterData = tempdata.filter((items)=> 'title' in items?.card?.card);

               setRestData(filterData);
            }
       
            fetchData();
           },[])
           console.log(RestData);
           
    return(
        <div className="w-[80%] mx-auto mt-20">
                  {
                    RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card}></MenuCard>)
                  }
                </div>
    )

}