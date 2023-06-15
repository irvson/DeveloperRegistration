import { useNavigate } from 'react-router-dom'
import './step1Style.css'
import { Theme } from '../../components/Theme'
import {useForm , FormActions} from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react'


export const Step1 = ()=>{
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

useEffect(() =>{
    dispatch({
        type:FormActions.setCurrentStep,
        payload:1
    })
},[])


    
    const handleNextStep = () =>{
        if(state.name !== '' && state.name.length >=5){
            navigate('/step2')
        } else{
            alert("Preencha os dados.")
        }
       
    }

    const handleNameChange = (e:ChangeEvent<HTMLInputElement>) =>{
        dispatch ({
            type: FormActions.setName,
            payload: e.target.value
        })
    }


    return(
       <Theme>
       <div className="contentStep1">
        <p>Passo 1/3 </p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo abaixo com o seu nome.</p>
        
        
        <hr/>

        <label>
            Seu Nome
            <input 
            type="text" 
            autoFocus={true} 
            value={state.name} 
            onChange={handleNameChange}
            />
        </label>

        <button onClick={handleNextStep}>Próximo</button>

       </div>
       </Theme>
    )
}