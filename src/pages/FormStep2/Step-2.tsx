import "./step2Style.css";
import { Theme } from "../../components/Theme";
import { useForm, FormActions } from "../../contexts/FormContext";
import { useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";
import { useNavigate, Link } from "react-router-dom";

export const Step2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "") {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.name !== "") {
      navigate("/step3"); // Navegar para a próxima etapa (/step3)
    } else {
      alert("Preencha os dados.");
    }
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <div className="contentStep2">
        <p>Passo 2/3 </p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

        <hr />
        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="👨‍🎓"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou Intermediário"
          description="Já programa há 2 anos ou mais"
          icon="👨‍💻"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

<SelectOption
          title="Sou programador"
          description="Já programa há 5 anos ou mais"
          icon="👨‍💻"
          selected={state.level === 2}
          onClick={() => setLevel(2)}
        />

        <Link className="backButton" to="/">Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button> {/* Adicionado onClick para chamar a função handleNextStep */}
      </div>
    </Theme>
  );
};
