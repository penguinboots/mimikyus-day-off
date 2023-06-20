import Image from "next/image";
import bag from "@/public/other/icon_bag.png";

export default function InventoryButton(props) {
  return (
    <button className="inventory-button" onClick={props.handleClick}>
      <Image src={bag} alt="Inventory Bag" />
    </button>
  );
}
