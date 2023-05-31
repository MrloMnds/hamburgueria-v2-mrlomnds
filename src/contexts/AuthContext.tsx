import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { api } from "../services/api";
import axios from "axios";

interface iAuthProviderProps {
  children: React.ReactNode;
}

interface iUser {
  id: string;
  name: string;
  email: string;
}

export interface iUserResponse {
  accessToken: string;
  user: iUser;
  prevState: null;
}

export interface iLoginFormData {
  email: string;
  password: string;
}

export interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface iAuthProviderValue {
  userLogin: (formData: iLoginFormData) => void;
  userRegister: (formData: iRegisterFormData) => void;
  user: iUserResponse | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext({} as iAuthProviderValue);

export const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [user, setUser] = useState<iUserResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const response = await api.get(`users/${userId}`);

        const userInfo: iUser = {
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
        };
        const userResponse: iUserResponse = {
          accessToken: token,
          user: userInfo,
          prevState: null,
        } 

        setUser(userResponse);
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, [navigate]);

  const userLogin = async (formData: iLoginFormData): Promise<void> => {
    try {
      const response = await api.post("login", formData);
      const token = response.data.accessToken;
      const toNavigate = location.state?.from?.pathname || "/dashboard";

      localStorage.setItem("token", token);
      localStorage.setItem("userId", response.data.user.id);
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      setUser(response.data.user);
      navigate(toNavigate, { replace: true }); // replace = Remove o a tela de login do historico se o user estiver logado
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        error.response.data === "Email and password are required" &&
          toast.error("Os campos são obrigatórios");
        error.response.data === "Cannot find user" &&
          toast.error("Usuario com este email não existe");
        error.response.data === "Password is too short" &&
          toast.error("Senha muito curta");
        error.response.data === "Incorrect password" &&
          toast.error("Senha incorreta");
      } else {
        toast.error(`${error}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData: iRegisterFormData): Promise<void> => {
    try {
      setLoading(true);
      const response = await api.post("users", formData);
      const token = response.data.accessToken;

      localStorage.setItem("token", token);
      toast.success("Conta criada com sucesso");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        error.response.data === "Email already exists" &&
          toast.error("Uma conta com este email já existe");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ userLogin, userRegister, user, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
