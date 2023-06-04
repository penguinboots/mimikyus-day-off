import React from 'react';
import MoveDetail from './MoveDetail';

export default function MoveCard() {
  return (
    <div className="move-info-card">
      <MoveDetail
        moveName="Move 1"
        power={80}
        description="Move 1 description"
      />
      <MoveDetail
        moveName="Move 2"
        power={100}
        description="Move 2 description"
      />
      <MoveDetail
        moveName="Move 3"
        power={70}
        description="Move 3 description"
      />
      <MoveDetail
        moveName="Move 4"
        power={120}
        description="Move 4 description"
      />
    </div>
  );
}
