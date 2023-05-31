import { ContainerLoginRegister } from "../../components/ContainerLoginRegister";
import { StyledHeadline } from "../../components/Headline";
import { LoginForm } from "../../components/LoginForm";
import logo from "../../img/logo.svg";
import shoppingBag from "../../img/shoppingBag.svg";
import { Logo } from "../../styles/Logo";

export const Login = () => {
  return (
    <ContainerLoginRegister>
      <Logo>
        <img src={logo} alt="logo burguer kenzie" />
      </Logo>
      <StyledHeadline>
        <div>
          <img src={shoppingBag} alt="sacola de compras" />
        </div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <span>melhores</span> ingredientes.
        </p>
      </StyledHeadline>
      <LoginForm />
    </ContainerLoginRegister>
  );
};
