export default function AchievementPopup(props) {
  const { achievement } = props
  return (
    <div>
      {achievement && (
        <>
          <span>ACHIEVEMENT GET!</span>
          <img src={`/achievements/${achievement.name}.png`} alt={achievement.title} />
        </>
      )}
    </div>
  );
}