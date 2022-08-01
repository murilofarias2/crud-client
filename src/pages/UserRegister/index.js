import styles from './styles.module.scss'
import UserForm from "../../components/UserForm";
import useForm from '../../hooks/useForm';
import validateInfo from '../../hooks/validateInfo';
import { Link } from 'react-router-dom'

export default function UserRegister(){

    const { handleSubmit, errors, values, handleChange } = useForm(validateInfo)
    
    return(
        <div>
            <div className={styles.title}>
                <h2>Cadastro de usuário</h2>
            </div>
            
            <UserForm isEditable={true} errors={errors} values={values} onChange={handleChange}/>

            <div className={styles.buttonArea}>
                    <Link to='/home'><button>Cancelar</button></Link>
                    <button className={styles.submit} onClick={handleSubmit}>Registrar</button>
            </div>
        </div>
    )
}