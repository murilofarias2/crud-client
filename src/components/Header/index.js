import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

export default function Header(){
    return(
        <div className={styles.headerContainer}>    
            <FontAwesomeIcon icon={faLaptopCode} className={styles.techIcon}/>
            <h1>Fintech</h1>
        </div>
    )
}