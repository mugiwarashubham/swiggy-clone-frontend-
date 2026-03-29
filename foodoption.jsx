import { imagegridcards} from "../utils/fooddata";
import Foodcard from "./foodcard";

export default  function Foodoption() {

    return(
        <div className="mt-20 w-[80%] container mx-auto  text-3xl font-bold">
            <h1 className="px-35">Order our best food option</h1>
        <div className="w-[80%] container mx-auto flex flex-nowrap overflow-x-auto mt-20 gap-3">
           {
            imagegridcards.map((fooddata)=><Foodcard key={fooddata.id} fooddata={fooddata}></Foodcard>)
            }
        </div>
        </div>

    )
}