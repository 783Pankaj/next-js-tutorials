'use client'
import { useRouter } from "next/navigation";


const LoginTeacher=()=>{
    const router = useRouter();

    const BackLogin=(page)=>{
    router.push(page);
    }
    return(
        <div>
            <h1>Teacher Login Page</h1>
            <br/>
            <button onClick={()=>BackLogin('/login')}>Back to Login</button>

        </div>
    );
}
export default LoginTeacher;