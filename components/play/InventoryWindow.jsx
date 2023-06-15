import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useGameState } from "@/utils/context/GameStateContext";

export default function InventoryWindow(props) {
  const { gameState } = useGameState();
  const { isMenuOpen, handleClick } = props;

  const items = gameState.itemList.map((item) => (
    <div key={item.name} className="item">
      <span className="item-name">{item.name}</span>
      <span className="item-quantity">{item.quantity}</span>
    </div>
  ));

  return (
    <div className={`inventory-wrapper ${isMenuOpen.inventory ? "inv-open" : "inv-closed"}`}>
      <div
        className={`popup inventory-window`}
      >
        <div className="close-window" onClick={handleClick}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        {items}
      </div>
    </div>
  );
}
