import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import MaskedInput from '../../components/Inputs/MaskedInput'
import styles from './styles.module.scss';


export default function UserCard(props){

    const [deleting, setDeleting] = useState(false)
    const [deletingCPF, setDeletingCPF] = useState('')
    const [deleteActive, setDeleteActive] = useState(true)

    const handleCpfChange = (e) => {
        setDeletingCPF(e.target.value)
        if(e.target.value === props.cpf){
            setDeleteActive(false)
        }else{
            setDeleteActive(true)
        }
    }

    return(
        <li className={styles.userCard}>
            {deleting ? (
                <>
                    <div className={styles.deleting}>
                        Para apagar o usuário de CPF {props.cpf}, confirme-o na caixa abaixo
                        <div className={styles.confirmArea}>
                            <div className={styles.deleteInput}>
                            <MaskedInput
                                mask="999.999.999-99"
                                value={deletingCPF} 
                                readOnly={false}
                                onChange={handleCpfChange}
                                name='cpf'
                                style={{padding:0, margin:0}}
                            />
                            </div>
                            <div className={styles.deleteButtons}>
                                <button onClick={() => {setDeleting(false); setDeletingCPF('')}}>Cancelar</button>
                                <button className={styles.delete} disabled={deleteActive} onClick={()=>{props.deleteFunction();setDeleting(false);}}>Confirmar</button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.userInfo}>
                      {props.name}
                      <span>{props.cpf}</span>
                    </div>

                    <div className={styles.buttonArea}>
                        <FontAwesomeIcon icon={faTrash} className={styles.buttonIcon} onClick={()=>{setDeleting(true)}}/>
                        <Link to={`/user/${props.id}`}><FontAwesomeIcon icon={faInfoCircle} className={styles.buttonIcon}/></Link>
                    </div>  
                </>
            )}

        </li>


    )
}