import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { removeItem } from "../utils/cartSlice";
import non_veg from "../utils/non_veg.jpg";
import veg from "../utils/veg.jpg"

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
    // const handleremoveItem = ()=>{
    //     dispatch(removeItem());
    // } 
    return(
    <div>
        
            <h1 className="text-3xl font-bold text-slate-700 text-center"><span className="text-orange-600">Your </span>Cart</h1>
            <div className="w-6/12 border border-slate-200 shadow-lg h-full m-auto mt-3">
                {cartItems.map((item,index)=>
                <div key={index} className="flex justify-between px-3 py-5 pb-10 border-b-2 border-gray-400 mx-3">
                    <div className="w-8/12">
                    {item.card.info.isVeg ? <img className="w-5 rounded-3xl mb-2" src={veg} alt=""/>
                        : <img className="w-5 rounded-3xl mb-2" src={non_veg} alt=""/>}
                        <h1 className="font-semibold text-lg mt-3">{item.card.info.name}</h1>
                        <p className="font-base my-3 text-lg"> ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</p>
                    </div>
                    {item.card.info.showImage ? <div className="relative">
                        <img className="w-40 h-40 object-cover rounded-lg " src={CDN_URL+item.card.info.imageId}/>
                        <button className="absolute right-3.5 -bottom-5 text-red-600 bg-slate-100 font-medium border-red-600 border py-2 px-3 rounded-lg hover:bg-slate-200" 
                        >Remove Item</button>
                    </div> : 
                    <button className="text-red-600 font-medium border-red-600 border h-10 px-3 mt-auto shadow-lg rounded-lg hover:bg-slate-200" 
                    >Remove Item</button>}
                    
                </div>
                )}
            </div>
            {cartItems.length===0 && <h1 className="text-lg font-medium text-center pt-3"> Please add items to the cart!</h1> }
            <div className="text-center">
                <button className="bg-slate-900 text-white py-1 px-3 my-3 rounded-lg font-medium text-lg" onClick={handleClearCart}>Clear Cart</button>
            </div>
            {/* {cartItems.length===0 && <h1 className="text-lg font-medium text-center"> Please add items to the cart!</h1> } */}
    </div>)
}
export default Cart