import { useGameState } from "@/utils/context/GameStateContext";

export default function BattleHistory() {
  const { battleHistory, setBattleHistory } = useGameState();
  const currentHistory = battleHistory.slice(-4);

  const displayHistory = currentHistory.map((historyItem, index) => {
    const darknessLevel = 200 - (index + 1) * 40; // Calculate the darkness level for each item

    const itemStyle = {
      color: `rgb(${darknessLevel}, ${darknessLevel}, ${darknessLevel})`,
    };

    return (
      <div key={index} className="battle-history-item" style={itemStyle}>
        {historyItem}
      </div>
    );
  });

  return <div className="battle-history-container">{displayHistory}</div>;
}
