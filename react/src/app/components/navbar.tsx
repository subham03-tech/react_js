import Link from "next/link";
import One from "../one/page";

export default function Navbar(){
    return(
        <>
        <nav>
            <ul>
                <li ><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#login">login</a></li>
            </ul>
        </nav>
        </>
        
    )
}
    