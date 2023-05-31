import { ContainerLoginRegister } from "../../components/ContainerLoginRegister";
import { StyledHeadline } from "../../components/Headline";
import { RegisterForm } from "../../components/RegisterForm";
import logo from "../../img/logo.svg";
import shoppingBag from "../../img/shoppingBag.svg";

export const Register = () => {
  return (
    <ContainerLoginRegister>
      <img src={logo} alt="logo burguer kenzie" />
      <StyledHeadline>
        <div>
          <img src={shoppingBag} alt="sacola de compras" />
        </div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <span>melhores</span> ingredientes.
        </p>
      </StyledHeadline>
      <RegisterForm />
    </ContainerLoginRegister>
  );
};
