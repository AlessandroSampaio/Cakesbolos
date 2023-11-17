import { useState } from "react";
import { Button } from "react-native";
import AuthForm from "../../components/AuthForm";

export default function LoginScreen({ navigation }) {
  const handleWelcome = () => {
    navigation.navigate("Home");
  };

  const handleSignUp = () => {    
    navigation.navigate("SignUp");
  };

  const [user, setUser] = useState({
    email: "",
    senha: ""
  });

  return (
    <AuthForm user={user} setUser={setUser}>
      <Button title="Entrar" onPress={handleWelcome} color="black" />
      <Button title="Cadastre-se" onPress={handleSignUp} color="blue" />
    </AuthForm>
  );
}
