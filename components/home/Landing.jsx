export default function Landing(props) {
  
  const { setMode, user } = props;

  const handleClick = () => {
    if (user) {
      setMode("DASH");
    } else {
      setMode("LOGIN");
    }
  }

  return (
    <div className="landing-container">
        <button onClick={handleClick}>Enter</button>
    </div>
  );
}
