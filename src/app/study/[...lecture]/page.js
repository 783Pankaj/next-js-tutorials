'use client'
const AllLecture = ({params}) => {
    console.log(params)
    return (
      <div>
        <h1>Day {params.lecture[0]}</h1>
        <br/>
        <h1>Lecture {params.lecture[1]}</h1>
      </div>
    )
  }
  
  export default AllLecture
  