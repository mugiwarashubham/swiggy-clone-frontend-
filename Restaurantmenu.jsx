import { useParams } from "react-router";
import { useEffect, useState } from "react";
export default function Restaurantmenu(){
    const {id}=useParams(); //useparam id ki value layega 

    const [RestData, setRestData] = useState(null)
     useEffect(()=>{
        
            async function fetchData() {
               
               const proxyServer = "https://cors-anywhere.herokuapp.com/"
               const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
               const response = await fetch(proxyServer+swiggyAPI);
               const data = await response.json();
               setRestData(data);
            }
       
            fetchData();
           },[])
           
    return(
        <h1>id:{id}</h1>
    )

}