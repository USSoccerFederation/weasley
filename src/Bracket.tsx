import React, { useEffect } from 'react';
import db from '../db.json'
import { json } from 'stream/consumers';

// const URL = 'https://raw.githubusercontent.com/Drarig29/brackets-viewer.js/master/demo/db.json';
// const optaApiKey = '1svofrzot823s1rmatl9zhxqe8';

const config = {
  parent_id: 'createNewBracket',
  html_name_id: 'name',
  html_stage_type_selector_id: 'selector',
  html_team_input_id: 'teams',
  html_group_id: 'groups',
  html_round_robin_mode_id: 'round-robin-mode',
  html_skip_first_round_checkbox_id: 'skip_first',
  html_grand_final_type_id: 'grand_final',
  html_single_elimination_seed_textarea_id: 'single_elimination_seeds',

  group_default_size: 1
}

async function BracketRenderer() {
  // const data = await fetch(URL).then(res => res.json());
  const data = db;

  window.bracketsViewer.setParticipantImages(data.participant.map(participant => ({
    participantId: participant.id,
    imageUrl: 'https://cdn.sanity.io/images/oyf3dba6/production/7319c8d2e75ca335aa9a1cd432ed92543c7987ab-5000x5000.png',
  })));

  window.bracketsViewer.render({
    stages: data.stage,
    matches: data.match,
    matchGames: data.match_game,
    participants: data.participant,
  });
}

function Bracket() {
  useEffect(() => {
    BracketRenderer();
  }, []);
  
  return <div className="brackets-viewer"></div>
}

export default Bracket;