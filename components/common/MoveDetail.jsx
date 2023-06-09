export default function MoveDetail(props) {
  const { moveName, power, description } = props;

  return (
    <div className="move-detail">
      <h3>{moveName}</h3>
      <p>Power: {power}</p>
      <p>{description}</p>
    </div>
  );
}