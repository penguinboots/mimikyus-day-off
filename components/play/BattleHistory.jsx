import { useGameState } from "@/utils/context/GameStateContext";

export default function BattleHistory() {
  const { battleHistory } = useGameState();
  const currentHistory = battleHistory.slice(-6);

  const displayHistory = currentHistory.map((historyItem, index) => {
    const baseText = 0;
    const opacity = index / battleHistory.length + 0.6;

    const itemStyle = {
      color: `rgb(${baseText}, ${baseText}, ${baseText}, ${opacity})`,
    };

    return (
      <div key={index} className="battle-history-item" style={itemStyle}>
        {historyItem}
      </div>
    );
  });

  return <div className="battle-history-container">{displayHistory}</div>;
}
