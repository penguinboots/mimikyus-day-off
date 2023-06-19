import localFont from "next/font/local";
const vt = localFont({ src: "../../public/fonts/VT323-Regular.ttf" });

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
      <div className="end-image"></div>
      <button onClick={handleGameComplete}>BACK TO HOME</button>
    </div>
  );
}
