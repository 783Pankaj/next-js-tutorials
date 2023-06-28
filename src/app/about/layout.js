import Link from "next/link";
import './about.css'

export default function layout({children}){
    return(
        <div>
           <ul className="login-menu">
            <li>
            <h4><Link href="#">About NavBar</Link></h4>
            </li>
            <li>
                <Link href='/about/aboutstudent'>Student About</Link>
            </li>
            <li>
                <Link href='/about/aboutteacher'>Teacher About</Link>
            </li>
            <li>
                <Link href='/about'>About Page</Link>
            </li>
           </ul>
           {
            children
           }
        </div>
    )
}