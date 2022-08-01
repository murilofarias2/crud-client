import styles from './styles.module.scss'
import UserForm from '../../components/UserForm'
import Slider from '../../components/Slider'
import { Link, useParams } from 'react-router-dom'
import useForm from '../../hooks/useForm';
import validateInfo from '../../hooks/validateInfo';
import { useEffect } from "react";
import api from "../../services/api"

export default function UserDetails(){

    const { errors, values, handleChange, setValues, handleSlider, editable } = useForm(validateInfo)
    const {id} = useParams()
   
    const getUserDetails = async () => {
        const response = await api.get(`/person/${id}`)
        setValues(response.data.personExists)
    }


    useEffect(() => {
        getUserDetails()
    },[])


    return(
        <div>
            <div className={styles.title}>
                <h2>Detalhes do usuário</h2>
            </div>

            <Slider isChecked={editable} onChange={handleSlider}/>
            {errors.slider && <span>{errors.slider}</span>}

            <UserForm isEditable={editable} errors={errors} values={values} onChange={handleChange}/>

            <div className={styles.buttonArea}>
                <Link to='/home'><button>Voltar</button></Link>
            </div>
        </div>
    )
}