import React, { useEffect, useState, useRef } from 'react';
import styles from "@/styles/Bracket.module.scss";
import matches from "../data.json";
import fetchMatches from "../utils/matches";

function Bracket() {
    const [selectedTeams, setSelectedTeams] = useState({});
    const [allMatches, setAllMatches] = useState([]);

    const fetchMatchData = async() => {
        try {
            const response = await fetchMatches();
            setAllMatches(response.match);
        } catch (error) {
            console.error('Error fetching match data:', error);
        }
    };

    useEffect(() => {
        fetchMatchData();
    }, []);

    const handleTeamSelect = (matchId, team) => {
        setSelectedTeams(prevState => ({
            ...prevState,
            [matchId]: team
        }));
    };

    return (
        <div className={styles.bracketContainer}>
            <ul>
                {Object.keys(selectedTeams).map((key) => (
                    <li key={key}>
                        {key}: {selectedTeams[key]}
                    </li>
                ))}
            </ul>
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
                    {allMatches?.map(match => (
                        <tr key={match.matchInfo.id} className={styles.column}>
                            <td className={styles.match}>
                                <span className={styles.id}>{match.matchInfo.idd}</span>
                                <div className={styles.teams}>
                                    <button 
                                        className={`${styles.team} ${selectedTeams[match.matchInfo.id] === match.matchInfo.contestant[0].name ? styles.selected : ''}`}
                                        onClick={() => handleTeamSelect(match.matchInfo.id, match.matchInfo.contestant[0].name)}
                                    >{match.matchInfo.contestant[0].name}</button>
                                    <button 
                                        className={`${styles.team2} ${styles.team} ${selectedTeams[match.matchInfo.id] === match.matchInfo.contestant[1].name ? styles.selected : ''}`}
                                        onClick={() => handleTeamSelect(match.matchInfo.id, match.matchInfo.contestant[1].name)}
                                    >{match.matchInfo.contestant[1].name}</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Bracket;