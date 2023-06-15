import './App.css'
import { Router } from './router' 
import {FormProvider} from './contexts/FormContext'

export default ()=>{
    return(
      <FormProvider>
        <Router/>
      </FormProvider>
  
  )
}