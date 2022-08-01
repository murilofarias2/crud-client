import MaskedInput from '../../components/Inputs/MaskedInput'
import UnmaskedInput from '../../components/Inputs/UnmaskedInput'
import styles from './styles.module.scss'

export default function UserForm(props){

    return(
        <div className={styles.formArea}>
                <div className = {styles.fieldsArea}>
                    <UnmaskedInput
                        type="text"
                        label="Nome Completo"
                        value={props.values.name}
                        maxLength={99}
                        readOnly={!props.isEditable}
                        onChange={props.onChange}
                        name='name'
                    />
                    {props.errors.name && <p>{props.errors.name}</p>}

                    <div className={styles.doubleColumn}>
                        <div>
                        <MaskedInput
                            label="Idade"
                            mask="99"
                            value={props.values.age}
                            readOnly={!props.isEditable}
                            onChange={props.onChange}
                            name='age'
                        />
                        {props.errors.age && <p>{props.errors.age}</p>}
                        </div>
                        
                        <div className={styles.right}>
                            <MaskedInput
                            label="CPF"
                            mask="999.999.999-99"
                            value={props.values.cpf} 
                            readOnly={!props.isEditable}
                            onChange={props.onChange}
                            name='cpf'
                            />
                            {props.errors.cpf && <p>{props.errors.cpf}</p>}
                        </div>
                    </div>
                    
                    <MaskedInput 
                        label="Telefone"
                        mask="(99) 9 9999-9999"
                        value={props.values.phone} 
                        readOnly={!props.isEditable}
                        onChange={props.onChange}
                        name='phone'
                    />
                    {props.errors.phone && <p>{props.errors.phone}</p>}
                    <UnmaskedInput
                        type="email"
                        label="Email"
                        value={props.values.mail}
                        maxLength={99}
                        readOnly={!props.isEditable}
                        onChange={props.onChange}
                        name='mail'
                    />
                    {props.errors.mail && <p>{props.errors.mail}</p>}
                </div>
        </div>
    )
} 