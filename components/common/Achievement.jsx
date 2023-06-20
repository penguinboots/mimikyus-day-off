import localFont from "next/font/local";
const vt = localFont({ src: "../../public/fonts/VT323-Regular.ttf" });

export default function Achievement(props) {
  const { achievement } = props;

  return (
    <li>
      {achievement.collected === true ? (
        <img
          src={`/achievements/${achievement.name}.png`}
          alt={achievement.title}
        />
      ) : (
        <div className="ach-placeholder">
          <h3
            style={{
              fontFamily: vt.style.fontFamily,
            }}
          >
            ???
          </h3>
        </div>
      )}
    </li>
  );
}
