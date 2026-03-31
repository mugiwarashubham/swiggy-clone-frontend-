import { useParams } from "react-router";
import { useEffect, useState } from "react";
import MenuCard from "./Menucard";
import { Link } from "react-router";
export default function Restaurantmenu(){
    const {id}=useParams(); //useparam id ki value layega 
    const[selected,setslected]=useState(null);

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
          
           
    return(
      <div>
        <div className="w-[80%] mx-auto mt-20 mb-20">
               <Link to={`/city/delhi/${id}/search`}>
               <p className="w-full font-bold text-center py-4 rounded-4xl bg-gray-200 text-2xl">Search for Dishes</p>
              </Link>
         </div>  

        <div className="w-[80%] mx-auto mt-20 mb-20">
          <button className= {`text-2xl py-2 px-8 mr-4 border rounded-2xl ${selected==='veg'?"bg-green-500":"bg-gray-300"}`} onClick={() => setslected(selected==='veg'?null:'veg')}>Veg</button>
          <button className= {`text-2xl py-2 px-8 mr-4 border rounded-2xl ${selected==="nonveg"?"bg-red-500":"bg-gray-300"}`} onClick={() => setslected(selected==='nonveg'?null:'nonveg')}>Non Veg</button>
        </div>
        <div className="w-[80%] mx-auto mt-20">
                  {
                    RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodselected={selected}></MenuCard>)
                  }
                </div>
                </div>
    )

}