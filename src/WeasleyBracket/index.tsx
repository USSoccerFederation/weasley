import React, { useEffect, useState, useRef } from 'react';
import styles from "@/styles/WeasleyBracket.module.scss";
import matches from "../../data.json"

export default function WeasleyBracket() {

    return (
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
                {matches.map(match => (
                    <tr key={match.Id} className={styles.column}>
                        <td className={styles.match}>
                            <span className={styles.id}>{match.Id}</span>
                            <span className={styles.team}>{match.Team1}</span>
                            <span className={styles.versus}>vs</span>
                            <span className={styles.team}>{match.Team2}</span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}