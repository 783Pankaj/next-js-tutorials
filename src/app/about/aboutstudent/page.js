const { default: Link } = require("next/link");

const Aboutstudent=()=>{
    return(
        <div>
            <h1 className="heading">Student About Page</h1>
            <br/>
            <br/>
            <Link href='/about'>Back to Main About Page</Link>
        </div>
    );
}
export default Aboutstudent;