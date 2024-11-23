import Link from "next/link"
import styles from "../../styles/home.module.css"

export default async function Home() {
    return (
        <div className={styles.containers}>
            <div className={styles.homeImage}>
                <div className={styles.titleName}>Lumiere <br /> Calme</div>
            </div>
            <div className={styles.enterDiv}>
                <button className={styles.enterBtn}>
                    <Link href="/main">
                        Enter
                    </Link>
                </button>
            </div>
        </div>
    )
}