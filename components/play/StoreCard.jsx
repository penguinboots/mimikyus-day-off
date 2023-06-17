import StoreOption from "./StoreOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFan } from "@fortawesome/free-solid-svg-icons";
import localFont from "next/font/local";
const vt = localFont({ src: "../../public/fonts/VT323-Regular.ttf" });

export default function StoreCard(props) {
  const { name, color, options, chosenOption, setChosenOption, isStoreLoading } = props;

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
      <h3
        style={{
          fontFamily: vt.style.fontFamily,
        }}
      >
        {name}
      </h3>
      {isStoreLoading && (
        <div className="spinner-container">
          <FontAwesomeIcon className="spinner" icon={faFan} />
          <h4
            style={{
              fontFamily: vt.style.fontFamily,
              fontSize: "16px",
            }}
          >
            LOADING...
          </h4>
        </div>
      )}
      {optionItems}
    </div>
  );
}
