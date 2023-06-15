import { ReactNode } from 'react'
import './style.css'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
import { useForm } from '../../contexts/FormContext'



type Props = {
    children : ReactNode;
    
}


export const Theme =({children}:Props) =>{
const {state} = useForm();


    return (
        <div className='theme'>
            <div className="area">
                <Header/>
                <div className="steps">
                    <div className="sidebar">
                            <Sidebar
                                title="Pessoal"
                                description="Se identifique"
                                icon="profile"
                                path="/"
                                active={state.currentStep === 1}
                            />
                             <Sidebar
                                title="Profissional"
                                description="Seu nivel"
                                icon="book"
                                path="/step2"
                                active={state.currentStep === 2}
                            />
                             <Sidebar
                                title="Contatos"
                                description="Como te achar"
                                icon="mail"
                                path="/step3"
                                active={state.currentStep === 3}
                            />
                              <Sidebar
                                title="Finalizar"
                                description="Visualize seus dados"
                                icon="check"
                                path="/step4"
                                active={state.currentStep === 4}
                            />
                    </div>
                    <div className="page">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
