import { useGameState } from "@/utils/context/GameStateContext";

export default function BattleHistory(props) {
  const { battleHistory, setBattleHistory } = useGameState();
  const currentHistory = battleHistory.slice(-4);
  console.log(currentHistory);

  const displayHistory = currentHistory.map((historyItem, index) => (
    <div key={index} className="battle-history-item">
      {historyItem}
    </div>
  ));

  return (
    <div className="battle-history-display">
      {displayHistory}
    </div>
  );
}