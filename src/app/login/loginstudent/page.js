'use client'
import { useRouter } from 'next/navigation'

const LoginStudent = () => {
    const router = useRouter()

    const BackLogin=(pages)=>{
        router.push(pages)
    }
    return (
        <div>
            <h1 className="heading">Student Login Page</h1>
            <button onClick={()=>BackLogin('/login')}>Back to Main Login</button>
        </div>
    )
}

export default LoginStudent;
