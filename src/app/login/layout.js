import Link from "next/link";
import './login.css'

export default function layout({children}){
    return(
        <div>
           <ul className="login-menu">
            <li>
            <h4><Link href="#">Login NavBar</Link></h4>
            </li>
            <li>
                <Link href='/login/loginstudent'>Student Login</Link>
            </li>
            <li>
                <Link href='/login/loginteacher'>Teacher Login</Link>
            </li>
            <li>
                <Link href='/login'>Login Page</Link>
            </li>
           </ul>
           {
            children
           }
        </div>
    )
}