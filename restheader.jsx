import { Link } from "react-router";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

export default function RestHeader() {
        const {id}=useParams();
         const counter = useSelector(state=> state.cartslice.count);
  return (
   <header className="w-full shadow-md bg-white">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
    
        <div className="flex items-center gap-2">
          <div className="bg-orange-500 text-white font-bold text-xl px-3 py-2 rounded-xl">
            S
          </div>
          <span className="font-bold text-lg">Swiggy</span>
        </div>

        
        <div className="flex items-center gap-6 text-gray-700 font-medium">
          
          <Link to={`/city/delhi/${id}/search`} >
          <div className="cursor-pointer flex items-center gap-1">
            🔍 <span className="hidden sm:inline">Search</span>
          </div>
          </Link>

          
          <Link to="/Checkout">
          <div className="cursor-pointer flex items-center gap-1">
            🛒 <span className="hidden sm:inline">Cart{`(${counter})`}</span>
          </div>
          </Link>

        </div>

      </div>
    </header>
  );
}