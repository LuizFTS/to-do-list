import Rocket from '../assets/rocket.svg'
import styles from './Header.module.css'

export function Header() {
    
    return (
        <header className={styles.header}>
                <img src={Rocket} alt="icon" />
            <h1>
                <span>to</span>
                <span>do</span>
            </h1>
        </header>
    )
}