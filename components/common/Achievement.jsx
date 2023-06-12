export default function Achievement(props) {
  const { achievement } = props;
  return <li>{ achievement.collected === true ? achievement.name : "not earned yet"}</li>;
}
