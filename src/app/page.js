'use client'
import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const navigate = useRouter();

  const Page=(linkName)=>{
    navigate.push(linkName)
    navigate.push(linkName)
  }
  return (
    <main className={styles.main}>
      <h1>Hello user</h1>
      <br />
      <Link href="/login">Got to login Page</Link>
      <br />
      <Link href={"/about"}>Got to about page</Link>
      <div>
      <p>The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js.
      </p>
      </div>
      <div>
        <button onClick={()=>Page('./login')}>Go to login</button>
        <button onClick={()=>Page('./about')}>Go to About</button>
      </div>
      <button onClick={() => alert("Hello Next JS")}>Click Me</button>
    </main>
  )
} 
