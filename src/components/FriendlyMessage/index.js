import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss'

export default function FriendlyMessage() {
    return(
        <div className={styles.messageBox}>
            <FontAwesomeIcon 
                icon={faExclamationTriangle} 
                className={styles.triangle}
            />
            <span>Nenhum usuário cadastrado!</span>
        </div>
    )
}