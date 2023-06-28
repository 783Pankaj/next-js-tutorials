'use client'

import { useRouter } from "next/navigation";

const Login=()=>{
    const router = useRouter();
    const BackLogin=(pages)=>{
        router.push(pages);
        
    }
    const GoToMoreLogin=(pages)=>{
        router.push('/login'+pages);
      
    }
    return(
        <div>
            <h2 className="heading">Login Page</h2>
           
            <button onClick={()=>BackLogin('/')}>Back to Main Page</button>
           
            <button onClick={()=>GoToMoreLogin('/loginstudent')}>Go to Student Login Pae</button>
           
            <button onClick={()=>GoToMoreLogin('/loginteacher')}>Go to Teacher Login Page</button>
        </div>
    );
}
export default Login;