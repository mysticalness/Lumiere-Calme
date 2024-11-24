import Link from "next/link"
import styles from "../../styles/home.module.css"

export default async function Home() {
    return (
        <div className={styles.containers}>
            <div className={styles.homeImage}>
                <div className={styles.titleName}>Lumiere <br /> Calme</div>
            </div>
            <div className={styles.enterDiv}>
                <Link href="/main">
                    <button className={styles.enterBtn}>
                        Enter
                    </button>
                </Link>
            </div>
        </div>
    )
}