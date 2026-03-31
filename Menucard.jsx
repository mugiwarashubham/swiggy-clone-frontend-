import { useState } from "react"
import Foodmenu from "./foodmenu"
export default function MenuCard({menuItems,foodselected}){
    const [isopen,setisopen]=useState(true);

    
     if("categories" in menuItems){
        return(
            <div className="w-full">
            <p className="text-2xl font-bold">{menuItems.title}</p>
            <div>
                {
                    menuItems?.categories?.map((items)=> <MenuCard key={items?.title} menuItems={items} foodselected={foodselected}></MenuCard>)
                }
            </div>
            </div>
        )
    }




    if(!isopen){
        return(
            <div className="w-full">
                <div className="flex justify-between w-full">
                    <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
                    <button className="text-5xl font-bold mr-20" onClick={()=>setisopen(!isopen)}>{isopen?'⌄':'^'}</button>
                    </div>
                     <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
            </div>
        )
    }

    if(foodselected==='veg'){
        return(
            <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setisopen(!isopen)}>{isopen?'⌄':'^'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=> food?.card?.info?.isVeg === 1).map((items)=><Foodmenu key={items?.card?.info?.id} restData = {items?.card?.info}></Foodmenu>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
    }

    if(foodselected==='nonveg'){
        return(
            <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setisopen(!isopen)}>{isopen?'⌄':'^'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=> food?.card?.info?.isVeg !== 1).map((items)=><Foodmenu key={items?.card?.info?.id} restData = {items?.card?.info}></Foodmenu>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
    }

    return(
         <div className="w-full">
        <div  className="flex justify-between w-full">
         <p className="font-bold text-2xl ">{menuItems.title}</p>
         <button className="text-5xl font-bold mr-20" onClick={()=>setisopen(!isopen)}>{isopen?'⌄':'^'}</button>
         </div>
            <div>
                {
                    menuItems?.itemCards?.map((items)=><Foodmenu key={items?.card?.info?.id} restData = {items?.card?.info}></Foodmenu>)
                }
            </div>
              <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
     </div>
    )
}