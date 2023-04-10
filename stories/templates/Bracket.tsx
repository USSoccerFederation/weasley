import React, { useEffect } from 'react';

const URL = 'https://raw.githubusercontent.com/Drarig29/brackets-viewer.js/master/demo/db.json';

async function render() {
  const data = await fetch(URL).then(res => res.json());

  window.bracketsViewer.render({
    stages: data.stage,
    matches: data.match,
    matchGames: data.match_game,
    participants: data.participant,
  });
}

function Bracket() {
  useEffect(() => {
    render();
  }, []);
  
  return <div className="brackets-viewer"></div>
}

export default Bracket;