import localFont from "next/font/local";
const vt = localFont({ src: "../../public/fonts/VT323-Regular.ttf" });
import secretEnding from "@/public/story/secret_ending.png";

import Image from "next/image";

export default function EndGamePopup(props) {
  const { handleGameComplete } = props;
  return (
    <div className="popup or-is-it">
      <h2
        style={{
          fontFamily: vt.style.fontFamily,
        }}
      >
        OR IS IT...?
      </h2>
      <Image
        src={secretEnding}
        className="end-image"
        width="400"
        height="200"
        alt="Something on the horizon.."
      />
      <button onClick={handleGameComplete}>BACK TO HOME...</button>
    </div>
  );
}
