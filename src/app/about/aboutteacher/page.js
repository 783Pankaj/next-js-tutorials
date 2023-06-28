const { default: Link } = require("next/link");

const AboutTeacher=()=>{
    return(
        <div>
            <h2 className="heading">Teacher About Page</h2>
            <br/>
            <br/>
            <Link href="/about">Back To Main About Page</Link>
        </div>
    );
}
export default AboutTeacher;