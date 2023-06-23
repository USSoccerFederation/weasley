import styles from "@/styles/WeasleyBracket.module.scss";
import db from '../../db.json';
import Image from "next/image";
import { Participant } from "../../types/Participant";
import { Content } from "next/font/google";

export default function WeasleyBracket() {
    const data = db;
    const participants = data?.participant;
    const matches = data?.matches;

    function findContestantById({ dataArray } : any, id : string) {
        console.log("dataArray", dataArray);
        return dataArray.find(({ x } : any) => {
            return x.id === id ? x : null;
        })
    }

    return (
        <>
            <div className={styles.header}>
                <div>Round of 32</div>
                <div>Round of 16</div>
                <div>Quarter Final</div>
                <div>Semifinal</div>
                <div>Final</div>
            </div>
            <div className={styles.round}>
                {matches.map(match => (
                    <div key={match.matchId} className={styles.matchup}>
                        {match.contestants.map(contestant => (
                            <li key={contestant.id}>
                                {contestant.name}
                            </li>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}

export function TeamLogo({ url }: Participant) {
    return (
        <Image
            src={`/assets/${url}.png`}
            width="0"
            height="0"
            alt="Team logo"
            style={{ width: '2rem', height: 'auto', margin: '0 1rem' }}
        />
    )
}