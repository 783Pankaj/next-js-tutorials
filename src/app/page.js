'use client'
import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
   const router = useRouter();
   const LoginFun=(pages)=>{
    router.push(pages)
   }
  return (
    <main className={styles.main}>
      <h2>Hello user</h2>
      <Link href="/about">Got To About Page</Link>
      <button onClick={()=>LoginFun('/login')}>Go to Login Page</button>
    </main>
  )
} 
