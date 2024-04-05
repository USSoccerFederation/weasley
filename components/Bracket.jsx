import React, { useEffect, useState, useRef } from 'react';
import styles from "@/styles/WeasleyBracket.module.scss";
import matches from "../data.json"

export default function Bracket() {
    const [selectedTeams, setSelectedTeams] = useState({});
    const allMatches= matches;

    const handleTeamSelect = (matchId, team) => {
        setSelectedTeams(prevState => ({
            ...prevState,
            [matchId]: team
        }));
    };

    return (
        <div className={styles.bracketContainer}>
            <table className={styles.bracket}>
                <thead>
                    <tr>
                        <th className={styles.column}>Round of 32</th>
                        <th className={styles.column}>Round of 16</th>
                        <th className={styles.column}>Quarter Final</th>
                        <th className={styles.column}>Semifinal</th>
                        <th className={styles.column}>Final</th>
                    </tr>
                </thead>
                <tbody>
                    {allMatches.map(match => (
                        <tr key={match.Id} className={styles.column}>
                            <td className={styles.match}>
                                <span className={styles.id}>{match.Id}</span>
                                <div className={styles.teams}>
                                    <button 
                                        className={`${styles.team} ${selectedTeams[match.Id] === match.Team1 ? styles.selected : ''}`}
                                        onClick={() => handleTeamSelect(match.Id, match.Team1)}
                                    >{match.Team1}</button>
                                    <button 
                                        className={`${styles.team2} ${styles.team} ${selectedTeams[match.Id] === match.Team2 ? styles.selected : ''}`}
                                        onClick={() => handleTeamSelect(match.Id, match.Team2)}
                                    >{match.Team2}</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}