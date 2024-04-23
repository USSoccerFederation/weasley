import React, { useEffect, useState, useRef } from 'react';
import styles from "@/styles/Bracket.module.scss";
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
                    {allMatches?.map(({ matchInfo }, index) => (
                        <tr key={matchInfo.id} className={styles.column}>
                            <td className={styles.match}>
                                <span className={styles.id}>Game {index + 1}</span>
                                <div className={styles.teams}>
                                    <button 
                                        className={`${styles.team} ${selectedTeams[matchInfo.id] === matchInfo.contestant[0].officialName ? styles.selected : ''}`}
                                        onClick={() => handleTeamSelect(matchInfo.id, matchInfo.contestant[0].name)}
                                    >{matchInfo.contestant[0].name}</button>
                                    <button 
                                        className={`${styles.team2} ${styles.team} ${selectedTeams[matchInfo.id] === matchInfo.contestant[1].officialName ? styles.selected : ''}`}
                                        onClick={() => handleTeamSelect(matchInfo.id, matchInfo.contestant[1].name)}
                                    >{matchInfo.contestant[1].name}</button>
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