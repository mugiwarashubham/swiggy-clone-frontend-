import { grocerydata } from "../utils/grocerydata";
import Grocerycard from "./grocerycard";


export default  function Groceryoption() {

    return(
        <div className="w-[80%] container mx-auto mt-20 ">
            <h1 className="mx-auto px-30 text-3xl font-bold  ">Shop groceries on Instamart</h1>
        <div className="w-[80%] container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-10  ">
           {
            grocerydata.map((fooddata)=><Grocerycard key={fooddata.id} fooddata={fooddata}></Grocerycard>)
            }
        </div>
        </div>

    )
}