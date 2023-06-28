'use client'
import { useRouter } from 'next/navigation'

const LoginTeacher = () => {
    const router = useRouter()

    const BackLogin=(pages)=>{
        router.push(pages)
    }
    return (
        <div>
            <h1 className="heading">TeacherLogin Page</h1>
            <button onClick={()=>BackLogin('/login')}>Back to Main Login</button>
        </div>
    )
}

export default LoginTeacher;