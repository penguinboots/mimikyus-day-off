export default function MoveDetail(props) {
  const { moveName, power, description } = props;

  return (
    <div className="move-detail">
      <h3>{moveName.toUpperCase()}</h3>
      {power ? <h4>{power}<br/>POWER</h4> : ""}
      <p>{description}</p>
    </div>
  );
}
