import styles from './styles.module.scss'
import { useState } from 'react'



export default function UserPages(props) {

    const [currentButton, setCurrentButton] = useState(props.actualPage)

    const handleOtherButtonClick = (number) => { //number == 1 || number == -1
        const nextPage = props.actualPage + number
        props.changePage(nextPage); 
        if(nextPage >= 1 && nextPage <= props.pageNumber){
            setCurrentButton(props.actualPage + number); 
        }
    }

    let buttons = []
    for (let index = 1; index <= props.pageNumber; index++) {
        buttons.push(<button key={index} onClick={() => { props.changePage(index); setCurrentButton(index); }} disabled={index === currentButton}>{index}</button>)
    }

    return (

        <div className={styles.pagesBox}>
            <button onClick={() => {handleOtherButtonClick(-1)}}>{`<`}</button>
            {buttons}
            <button onClick={() => {handleOtherButtonClick(1)}}>{`>`}</button>

        </div>
    )

}