export default function MoveDetail(props) {
  const { moveName, power, description, damageType, type} = props;

  return (
    <div className="move-detail">
      <h3>{moveName.toUpperCase()}</h3>
      {power ? (
        <h4>
          {power}
          <br />
          POWER
        </h4>
      ) : (
        <h4>
          --
          <br />
          POWER
        </h4>
      )}
      <h5>
        DAMAGE: {damageType.toUpperCase()}
      </h5>
      <h5>
        TYPE: {type.toUpperCase()}
      </h5>
      <p>{description}</p>
    </div>
  );
}
