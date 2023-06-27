'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login=()=>{
    const router = useRouter();

    const GoPages=(pages)=>{
        router.push('/login'+pages)

    }
    return(
        <div>
            <h1>Login Page</h1>
            <br/>
            <Link href="/">Go to Home Page</Link><br/><br/>
            <button onClick={()=>GoPages('/loginteacher')}>Go to Teacher Login</button><br/><br/>
            <button onClick={()=>GoPages('/loginstudent')}>Go to Student Login</button>
        </div>
    );
}
export default Login;