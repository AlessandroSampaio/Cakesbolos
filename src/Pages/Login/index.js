import { Button } from "react-native";
import AuthForm from "../../components/AuthForm";

export default function LoginScreen({ navigation }) {
  const handleWelcome = () => {
    navigation.navigate("Home");
  };

  const handleSignUp = () => {
    // Adicione aqui a navegação para a tela de cadastro
    navigation.navigate("SignUp");
  };

  return (
    <AuthForm>
      <Button title="Entrar" onPress={handleWelcome} color="black" />
      <Button title="Cadastre-se" onPress={handleSignUp} color="blue" />
    </AuthForm>    
  );
}
