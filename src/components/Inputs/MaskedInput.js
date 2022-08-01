import InputMask from 'react-input-mask'
import styles from './styles.module.scss'

export default function MaskedInput(props){

    return(
        <div className={styles.boxInput}>
            <h3>{props.label}</h3>
            <InputMask 
                mask={props.mask} 
                value={props.value} 
                onChange={props.onChange} 
                readOnly={props.readOnly}
                className={styles.input}
                name={props.name}
            />
        </div>
    )

}