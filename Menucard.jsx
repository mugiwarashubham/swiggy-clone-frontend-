import Foodmenu from "./foodmenu"
export default function MenuCard({menuItems}){
    return(
        <div>
            <p>{menuItems.title}</p>
            <div>
                {
                    menuItems?.itemCards?.map((items)=><Foodmenu key={items?.card?.info?.id} restData = {items?.card?.info}></Foodmenu>)
                }
            </div>
        </div>
    )
}