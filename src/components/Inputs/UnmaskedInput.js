import styles from './styles.module.scss'


export default function UnmaskedInput(props){

    return(
        <div className={styles.boxInput}>
            <h3>{props.label}</h3>
            <input 
                type={props.type} 
                value={props.value} 
                onChange={props.onChange}
                maxLength={props.maxLength} 
                readOnly={props.readOnly}
                className={styles.input}
                name={props.name}
            />
        </div>
        )

}