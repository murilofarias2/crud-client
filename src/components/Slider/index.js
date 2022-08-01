import styles from './styles.module.scss'

export default function Slider(props){
    return(
        <div className={styles.sliderBox}>
                <span>Editar</span>
                <label className={styles.switch}>
                    <input type="checkbox" checked={props.isChecked} onChange={props.onChange}/>
                    <span className={styles.slider}></span>
                </label>
            </div>
    )
}