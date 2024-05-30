
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { coinContext } from "../../Context/Globalcontext";

const Navbar = () => {

    const {setCurrency}= useContext(coinContext);

        const currencyhandler=(e)=>{
         switch (e.target.value){

            case "usd":{
                setCurrency({name:"usd", Symbol: "$"})
                break;
            }
            case "eur":{
                setCurrency({name:"eur", Symbol: "€"})
                break;
            }
            case "bdt":{
                setCurrency({name:"bdt", Symbol: "৳"})
                break;
            }

            default: {
                setCurrency({name:"usd", Symbol: "$"})
                break
            }
            
                
         }


        }

    return (
        <div className='main-container flex  items-center justify-around  md:p-7 sm:p-2 border-b text-[#ddd] '>

            <div className='right-nav flex items-center  gap-5'>

                <div className="logo ">
                  <img className=" w-max-12vw-120px" src={logo} alt="" />
                </div>

                <div className="lists ml-12 ">
                    <ul className="flex items-center md:gap-5 sm:gap-2 cursor-pointer ">
                    <li> <Link to="/">Home</Link> </li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                    </ul>
                </div>

            </div>

            <div className="left-nav flex items-center gap-5">
                <div className="options">
                    <select onChange={currencyhandler} className="block w-full p-2 border border-gray-500 rounded text-black">
                     
                     <option value="usd">USD</option>
                     <option value="eur">EUR</option>
                     <option value="bdt">BDT</option>

                    </select>

                </div>

                <div className="button  ">
                    <button className="flex items-center gap-3 
                    px-4 py-2 rounded bg-white border-none text-[#393939] ">signup <img src={arrow_icon}></img> </button>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;