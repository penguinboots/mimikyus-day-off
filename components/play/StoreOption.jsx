export default function StoreOption(props) {
  const { name, chosenOption, handleChooseOption } = props;
  return (
    <div className={`option ${chosenOption.item === name ? "chosen" : ""}`}>
      <div>{name}</div>
      <button onClick={() => handleChooseOption(name)}>CHOOSE</button>
    </div>
  );
}
