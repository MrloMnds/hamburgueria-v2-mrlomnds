import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext, iRegisterFormData } from "../../contexts/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledInput } from "../Inputs";
import { StyledButton } from "../Buttons";
import { useNavigate } from "react-router-dom";

interface iRegisterFormProps {
  className?: string;
}

export const RegisterForm = ({ className }: iRegisterFormProps) => {
  const { userRegister } = useContext(AuthContext);

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const registerSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Necessário pelo menos 2 caracteres")
      .max(50, "Muitos caracteres")
      .required("Este campo é obrigatório"),

    email: yup
      .string()
      .email("Digite um email válido")
      .required("Este campo é obrigatório"),

    password: yup
      .string()
      .min(6, "A senha necessita de 6 caracteres no mínimo")
      .matches(/^(?=.*?[A-Z])/, "Necessario 1 letra maiuscula")
      .matches(/^(?=.*?[a-z])/, "Necessario 1 letra minuscula")
      .matches(/^(?=.*?[0-9])/, "Necessario 1 numero")
      .required("Este campo é obrigatório"),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas precisam ser idênticas")
      .required("Este campo é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<iRegisterFormData>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const submit = (formData: iRegisterFormData) => {
    userRegister(formData);
    reset();
    navigate("/login");
  };

  const watchInputs = watch(["name", "email", "password", "confirmPassword"]);

  const disableButton = () =>
    watchInputs[0] !== "" &&
    watchInputs[0] !== undefined &&
    watchInputs[1] !== "" &&
    watchInputs[1] !== undefined &&
    watchInputs[2] !== "" &&
    watchInputs[2] !== undefined &&
    watchInputs[3] !== "" &&
    watchInputs[3] !== undefined
      ? false
      : true;

  return (
    <form className={className} onSubmit={handleSubmit(submit)} noValidate>
      <div className="h2Div">
        <h2>Cadastro</h2>
        <p onClick={goToLogin}>Retornar para o login</p>
      </div>

      <fieldset>
        <label>Nome</label>
        <StyledInput
          type="text"
          {...register("name")}
          placeholder="Digite seu nome"
        />
        {errors.name && <p>{errors.name?.message}</p>}
      </fieldset>

      <fieldset>
        <label>Email</label>
        <StyledInput
          type="text"
          {...register("email")}
          placeholder="Digite seu email"
        />
        {errors.email && <p>{errors.email?.message}</p>}
      </fieldset>

      <fieldset>
        <label>Senha</label>
        <StyledInput
          type="password"
          {...register("password")}
          placeholder="Digite sua senha"
        />
        {errors.password && <p>{errors.password?.message}</p>}
      </fieldset>

      <fieldset>
        <label>Confirmar senha</label>
        <StyledInput
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirme sua senha"
        />
        {errors && <p>{errors.confirmPassword?.message}</p>}
      </fieldset>

      <StyledButton
        backgroundColor={disableButton() ? "--Gray-20" : "--Primary"}
        type="submit"
        buttonSize="default"
        buttonStyle="green"
        disabled={disableButton()}
      >
        Cadastrar
      </StyledButton>
    </form>
  );
};
