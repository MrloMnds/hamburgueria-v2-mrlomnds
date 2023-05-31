import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext, iLoginFormData } from "../../contexts/AuthContext";
import { StyledButton } from "../Buttons";
import { StyledInput } from "../Inputs";

interface iLoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: iLoginFormProps) => {
  const { register, handleSubmit, reset } = useForm<iLoginFormData>();

  const { userLogin, loading } = useContext(AuthContext);

  const submit = (formData: iLoginFormData) => {
    userLogin(formData);
    reset();
  };

  const navigate = useNavigate();

  return (
    <form className={className} onSubmit={handleSubmit(submit)} noValidate>
      <div className="h2Div">
        <h2>Login</h2>
      </div>
      <fieldset>
        <label>Email</label>
        <StyledInput
          type="text"
          {...register("email")}
          placeholder="Digite seu email"
        />
      </fieldset>

      <fieldset>
        <label>Senha</label>
        <StyledInput
          type="password"
          {...register("password")}
          placeholder="Digite sua senha"
        />
      </fieldset>

      <StyledButton
        disabled={loading}
        type="submit"
        buttonSize="default"
        buttonStyle="green"
      >
        Logar
      </StyledButton>
      <div className="pDiv">
        <p>Crie sua conta para saborear muitas</p>
        <p>delícias e matar sua fome!</p>
      </div>
      <StyledButton
        disabled={loading}
        type="button"
        buttonSize="default"
        buttonStyle="gray"
        onClick={() => navigate("/register")}
      >
        Cadastrar
      </StyledButton>
    </form>
  );
};
