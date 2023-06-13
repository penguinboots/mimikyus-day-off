import StoreOption from "./StoreOption";

export default function StoreCard(props) {
  const { name, color, options, chosenOption, setChosenOption } = props;

  const handleChooseOption = (option) => {
    setChosenOption(option);
  };

  let optionItems = options.map((option, index) => {
    return (
      <StoreOption
        key={index}
        name={option}
        chosenOption={chosenOption}
        handleChooseOption={handleChooseOption}
      />
    );
  });

  return (
    <div
      className="store"
      style={{
        backgroundColor: `${color}`,
      }}
    >
      <h3>{name}</h3>
      {optionItems}
    </div>
  );
}
