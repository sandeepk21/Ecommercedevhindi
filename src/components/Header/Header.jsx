import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
//import { Context } from "../../utils/context";

const Header = () => {
    const[scrolled,setScrolled]=useState(false);
    const handlescroll=()=>{
        const offset=window.scrollY;
        if(offset>200){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",handlescroll)
    },[])
    return (
        <header className={`main-header ${scrolled?'sticky-header':''}`}>
            <div className="header-content">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Category</li>
                </ul>
                <div className="center">FSFSFEDFF</div>
                <div className="right">
                    <TbSearch/>
                    <AiOutlineHeart/>
                    <span className="cart-icon">
                        <CgShoppingCart/>
                    </span>
                </div>
            </div>
        </header>
    )
};

export default Header;
