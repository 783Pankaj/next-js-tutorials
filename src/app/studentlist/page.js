import Link from "next/link"

const StudentList = () => {
    return (
        <div>
            <ul>
                <li>
                   <Link href='/studentlist/pankaj'>Pankaj</Link>
                </li>
                <li>
                <Link href='/studentlist/Nishant'>Nishant</Link>
                </li>
                <li>
                <Link href='/studentlist/Ravi'>Ravi</Link>
                </li>
                <li>
                <Link href='/studentlist/Akshay'>Akshay</Link>
                </li>
                <li>
                <Link href='/studentlist/sumit'>sumit</Link>
                </li>
            </ul>
        </div>
    )
}

export default StudentList
