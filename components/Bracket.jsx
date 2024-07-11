import React, { useEffect, useState } from 'react';
import styles from "@/styles/Bracket.module.scss";
import fetchMatches from "../utils/matches";

function Bracket() {
    const [selectedTeams, setSelectedTeams] = useState({});
    const [allMatches, setAllMatches] = useState([]);

    const fetchMatchData = async () => {
        try {
            const response = await fetchMatches();
            setAllMatches(response.match?.reverse());
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

    const eigthFinals = allMatches?.filter(match => match?.matchInfo?.stage?.name === "8th Finals");
    const quarterFinals = allMatches?.filter(match => match?.matchInfo?.stage?.name === "Quarter-finals");
    const semiFinals = allMatches?.filter(match => match?.matchInfo?.stage?.name === "Semi-finals");
    const final = allMatches?.filter(match => match?.matchInfo?.stage?.name === "Final");

    const getTeamName = (team) => {
        return team?.name || "TBD";
    };

    return (
        <div className={styles.bracketContainer}>
            <div className={styles.stage}>
                <h3>8th Finals</h3>
                {eigthFinals?.map(({ matchInfo }, index) => (
                    <div key={matchInfo.id} className={styles.match}>
                        <span className={styles.id}>Game {index + 1}</span>
                        <div className={styles.teams}>
                            <button 
                                className={`${styles.team} ${selectedTeams[matchInfo.id] === matchInfo.contestant[0].officialName ? styles.selected : ''}`}
                                onClick={() => handleTeamSelect(matchInfo.id, matchInfo.contestant[0].name)}
                            >{getTeamName(matchInfo.contestant?.[0])}</button>
                            <button 
                                className={`${styles.team} ${styles.team2} ${selectedTeams[matchInfo.id] === matchInfo.contestant[1].officialName ? styles.selected : ''}`}
                                onClick={() => handleTeamSelect(matchInfo.id, matchInfo.contestant[1].name)}
                            >{getTeamName(matchInfo.contestant?.[1])}</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.stage}>
                <h3>Quarter Finals</h3>
                {quarterFinals?.map(({ matchInfo }, index) => (
                    <div key={matchInfo.id} className={styles.match}>
                        <span className={styles.id}>Game {index + 1}</span>
                        <div className={styles.teams}>
                            <button 
                                className={`${styles.team} ${selectedTeams[matchInfo.id] === matchInfo.contestant[0].officialName ? styles.selected : ''}`}
                                onClick={() => handleTeamSelect(matchInfo.id, matchInfo.contestant[0].name)}
                            >{getTeamName(matchInfo.contestant?.[0])}</button>
                            <button 
                                className={`${styles.team} ${styles.team2} ${selectedTeams[matchInfo.id] === matchInfo.contestant[1].officialName ? styles.selected : ''}`}
                                onClick={() => handleTeamSelect(matchInfo.id, matchInfo.contestant[1].name)}
                            >{getTeamName(matchInfo.contestant?.[1])}</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.stage}>
                <h3>Semi Finals</h3>
                {semiFinals?.map(({ matchInfo }, index) => (
                    <div key={matchInfo.id} className={styles.match}>
                        <span className={styles.id}>Game {index + 1}</span>
                        <div className={styles.teams}>
                            <button 
                                className={`${styles.team} ${selectedTeams[matchInfo.id] === matchInfo.contestant[0].officialName ? styles.selected : ''}`}
                                onClick={() => handleTeamSelect(matchInfo.id, matchInfo.contestant[0].name)}
                            >{getTeamName(matchInfo.contestant?.[0])}</button>
                            <button 
                                className={`${styles.team} ${styles.team2} ${selectedTeams[matchInfo.id] === matchInfo.contestant[1].officialName ? styles.selected : ''}`}
                                onClick={() => handleTeamSelect(matchInfo.id, matchInfo.contestant[1].name)}
                            >{getTeamName(matchInfo.contestant?.[1])}</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.stage}>
                <h3>Final</h3>
                {final?.map(({ matchInfo }, index) => (
                    <div key={matchInfo.id} className={styles.match}>
                        <span className={styles.id}>Game {index + 1}</span>
                        <div className={styles.teams}>
                            <button 
                                className={`${styles.team} ${selectedTeams[matchInfo.id] === matchInfo.contestant[0].officialName ? styles.selected : ''}`}
                                onClick={() => handleTeamSelect(matchInfo.id, matchInfo.contestant[0].name)}
                            >{getTeamName(matchInfo.contestant?.[0])}</button>
                            <button 
                                className={`${styles.team} ${styles.team2} ${selectedTeams[matchInfo.id] === matchInfo.contestant[1].officialName ? styles.selected : ''}`}
                                onClick={() => handleTeamSelect(matchInfo.id, matchInfo.contestant[1].name)}
                            >{getTeamName(matchInfo.contestant?.[1])}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bracket;