export default function Achievement(props) {
  const { achievement } = props;
  return <li>{ achievement.earned ? achievement.name : "not earned yet"}</li>;
}
