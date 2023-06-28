
"use client"
const Student = ({params} ) => {
    console.log(params)
    return (
        <div>
          <h1>student details</h1>
          <h2>name : {params.student}</h2>
        </div>
    )
}

export default Student
