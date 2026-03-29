import { dineoutRestaurants } from "../utils/dinedata";
import Dinecard from "./Dinecard";
export default function Dineoption(){
    return(
        <div className="mt-20 w-[65%]  mx-auto mt=20 mb-20 ">
            <h1 className="mx-auto  text-3xl font-bold  ">Discover best restaurants on Dineout</h1>
            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4 ">
                {
                 dineoutRestaurants.map((Restdata)=><Dinecard key={Restdata?.info?.id} Restdata={Restdata}></Dinecard>)
                }
            </div>
        </div>
    )
}
