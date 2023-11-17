import { useState } from "react";
import { Alert, Button } from "react-native";
import AuthForm from "../../components/AuthForm";
import { AutorizaUsuario } from "../../firebase/auth";

export default function LoginScreen({ navigation }) {
  const handleSignIn = () => {
    console.debug(`Entrando com o email ${user?.email} e senha ${user?.senha}`);    

    AutorizaUsuario(user)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Alert.alert("Sucesso", `Usuário ${user.email} loggado com sucesso`);
        navigation.navigate("Home");
      })
      .catch((error) => {
        Alert.alert("Falha no registro", error?.message);
      });
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
      <Button title="Entrar" onPress={handleSignIn} color="black" />
      <Button title="Cadastre-se" onPress={handleSignUp} color="blue" />
    </AuthForm>
  );
}
