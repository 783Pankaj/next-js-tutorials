import Link from "next/link";

const About=()=>{
    return(
        <div>
            <h2 className="heading">About Page</h2>
            <br/>
            <br/>
            <Link href='/'>Back to Main Page</Link>
            <br/>
            <br/>
            <Link href="/about/aboutstudent">Go To Student About</Link>
            <br/>
            <br/>
            <Link href="/about/aboutteacher">Go to Teacher About</Link>
        </div>
    );
}
export default About;