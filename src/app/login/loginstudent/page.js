'use client'
import { useRouter } from "next/navigation";

const LoginStudent=()=>{
    const router = useRouter();

    const BackLogin=(back)=>{
        router.push(back)
    }
    return(
        <div>
            <h1>Student Login Page</h1>
            <br/>
            <button onClick={()=>BackLogin('/login')}>Back to Login</button><br/>
            <button onClick={()=>BackLogin('/')}>Back Home</button>
        </div>
    );
}
export default LoginStudent;