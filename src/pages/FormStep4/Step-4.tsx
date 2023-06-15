import "./step4Style.css";
import { useNavigate } from "react-router-dom";
import "./step4Style.css";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import { ChangeEvent, useEffect } from "react";
import { Link } from "react-router-dom";

export const Step4 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 4,
    });
  }, []);

  const handleNextStep = () => {
    alert("Cadastro Efetuado com sucesso");
    console.log(state)
    navigate('/')
    window.location.reload();
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <div className="contentStep4">
        <p>
          Ao finalizar o cadastro vc sera redirecionado para a pagina inicial
        </p>
        <h1>Confira os seus dados</h1>

        <hr />

        <label>
          <div className="checkName">Nome:  {state.name}</div>
          <div className="checkName">Email:  {state.email}</div>
          <div className="checkName">GitHub:  {state.github}</div>
          <div className="checkName">
            Nivel: 
              {state.level === 0
              ? "Eu sou iniciante"
              : state.level === 1
              ? "Eu sou intermediário"
              : "Eu sou profissional"}
          </div>
        </label>

        <Link className="backButton" to="/step3">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Finalizar</button>
      </div>
    </Theme>
  );
};
