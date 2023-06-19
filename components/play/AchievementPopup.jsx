export default function AchievementPopup(props) {
  const { achievement } = props
  return (
    <div>
      <span>ACHIEVEMENT GET!</span>
      <img src={`public/achievements/${achievement.name}`} alt={achievement.title} />
    </div>
  );
}