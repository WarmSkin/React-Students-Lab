import Score from "./Score"

const Student = (props) => {
  return (
    <div className="student-data" style={{maxWidth: "20rem"}}>
      <div>
        <h1>Name: {props.student.name}</h1>
        <h3>Bio: {props.student.bio}</h3>
      </div>
      {props.student.scores.map((score,index) =>
        <Score key={index} score={score}/>
      )}
    </div>
  )
}

export default Student