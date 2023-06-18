import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function InventoryWindow(props) {
  const { isMenuOpen, handleClick, items } = props;

  return (
    <div
      className={`inventory-wrapper ${
        isMenuOpen.inventory ? "inv-open" : "inv-closed"
      }`}
    >
      <div
        className={`popup inventory-window ${
          isMenuOpen.inventory ? "inv-up" : "inv-down"
        }`}
      >
        <div className="close-window" onClick={handleClick}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        {items}
      </div>
    </div>
  );
}
