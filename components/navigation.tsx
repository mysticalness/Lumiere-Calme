import styles from "../styles/navigation.module.css"
import Link from "next/link"

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <div>
                <span className="material-symbols-outlined">menu</span>
            </div>
            <div className={styles.homeIcon}>
                <Link href="/">
                    <span className="material-symbols-outlined">home_app_logo</span>
                </Link>
                
            </div>
        </nav>
    )
}