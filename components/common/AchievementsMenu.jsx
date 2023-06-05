import Achievement from "./Achievement";

export default function AchievementsMenu(props) {
  const achievementsData = [
    {
      name: "crimes against magikarp",
      earned: true,
    },
    {
      name: "something shiny",
      earned: true,
    },
    {
      name: "crimes against snorlax",
      earned: true,
    },
    {
      name: "crimes against goomy",
      earned: true,
    },
    {
      name: "crimes against dugtrio",
      earned: true,
    },
    {
      name: "repeat offender",
      earned: true,
    },
    {
      name: "crimes against munchlax",
      earned: true,
    },
    {
      name: "and your little dog too",
      earned: true,
    },
    {
      name: "third time's the charm?",
      earned: true,
    },
    {
      name: "treasure hunter",
      earned: true,
    },
    {
      name: "enemy vanquished",
      earned: true,
    },
    {
      name: "the true meaning of day off",
      earned: true,
    },
  ];

  const achievements = achievementsData.map((ach) => {
    return (
      <Achievement key={ach.name} achievement={ach}/>
    )
  });

  return (
    <div className="popup achievement-container">
      <div className="close-window" onClick={props.handleClick}>
        X
      </div>
      <h2>Achievements</h2>
      <ul className="ach-list">
        {achievements}
      </ul>
    </div>
  );
}
