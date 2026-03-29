import { Link } from "react-router";

export default function RestCard({restInfo}){
   
    
    return (
        <Link to={"/city/delhi/"+restInfo?.info?.id}>
        <div className="max-w-[280px] mb-2 transform transition duration-200 hover:scale-95">
       
       <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info.cloudinaryImageId}></img>
      <div className="w-[95%] mx-auto mt-3">
       <div className="font-bold">{restInfo?.info?.name}</div>
       <div className="flex items-center gap-2">
        <svg style={{width:"14px", height:"14px", fill:"#48c479"}} viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
        <span className="text-lg">{restInfo?.info?.avgRating}</span>
        <span className="text-lg">{restInfo?.info?.sla?.slaString}</span>{/* taaki dono same line mein aaye */}
       </div>
       <div className="text-gray-600 text-md mt-1 h-7 overflow-hidden">{restInfo?.info?.cuisines.join(" ")}</div>{/* arrray mein cuisines the->taaki gap aajaye isliye join()*/}
       <div>{restInfo?.info?.areaName}</div>
        </div>
        </div>
        </Link>
    )
}