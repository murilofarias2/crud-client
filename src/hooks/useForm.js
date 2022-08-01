import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../services/api'

export default function useForm(validate){

    const history = useHistory()

    const [values, setValues] = useState({
        name:'',
        cpf:'',
        age:'',
        phone:'',
        mail:'',        
    })

    const [errors, setErrors] = useState({})
    const [editable, setEditable] = useState(false)


    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }


    const handleEdit = async () => {
        const currentErrors = validate(values)
        setErrors(currentErrors)

        if(Object.keys(currentErrors).length < 1){
            await api.put(`/person/${values._id}`,{
                ...values
            })
            setEditable(false)
        }
    }

    const handleSubmit =  async (e) =>{
        e.preventDefault()
        const currentErrors = validate(values)
        setErrors(currentErrors)

        if(Object.keys(currentErrors).length < 1){
            const submit = await api.post('/register', {
                ...values
            })
                      
            if(submit.data.success){
                history.push('/home')
            }
            
            setErrors(submit.data.errors)
        }
    }


    const handleSlider= () =>{
        if(!editable){
            setEditable(true)
        }else{
            handleEdit()
        }
    }

    return { handleChange, handleSubmit, handleEdit, values, setValues, errors, editable, handleSlider } 

}