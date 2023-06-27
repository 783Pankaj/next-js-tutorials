import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>about page</h1>
      <br/>
      <Link href="/">Go to Home Page</Link><br/><br/>
      <Link href='/about/studentabout'>Got To Studentbout</Link><br/><br/>
      <Link href='/about/teacherabout'>Got To TeacherAbout</Link>
    </div>
  )
}

export default About;
