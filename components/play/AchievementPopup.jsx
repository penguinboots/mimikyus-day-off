import localFont from "next/font/local";
const vt = localFont({ src: "../../public/fonts/VT323-Regular.ttf" });

export default function AchievementPopup(props) {
  const { achievement } = props;
  return (
    <>
      {achievement && (
        <>
          <h3
            style={{
              fontFamily: vt.style.fontFamily,
            }}
          >
            ACHIEVEMENT EARNED!
          </h3>
          <img
            src={`/achievements/${achievement.name}.png`}
            alt={achievement.title}
          />
          <div className="badge"></div>
        </>
      )}
    </>
  );
}
