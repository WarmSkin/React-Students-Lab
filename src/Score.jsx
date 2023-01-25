const Score = (props) => {
  return (
    <div>
      <h3>Score: {props.score.score} at {props.score.date}</h3>
    </div>
  )
}

export default Score