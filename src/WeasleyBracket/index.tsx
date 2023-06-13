import styles from "@/styles/WeasleyBracket.module.scss";

export default function WeasleyBracket() {
    return (
        <>
            <div className={styles.header}>
                <div>Round of 32</div>
                <div>Round of 16</div>
                <div>Quarter Final</div>
                <div>Semifinal</div>
                <div>Final</div>
            </div>
        </>
    )
}