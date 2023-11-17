import { useState } from "react";
import { Alert, Button } from "react-native";
import { RegistraUsuario } from "../../firebase/auth";
import AuthForm from "../../components/AuthForm";

export default function SignUpScreen({ navigation }) {
  function handleRegistrar() {
    console.debug(
      `Registrando o email ${user?.email} com senha ${user?.senha}`
    );
    RegistraUsuario(user)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Alert.alert("Sucesso", `Usuário ${user.email} registrado com sucesso`);
        navigation.navigate("Home");
      })
      .catch((error) => {
        Alert.alert("Falha no registro", error?.message);
      });
  }

  const [user, setUser] = useState({
    email: "",
    senha: "",
  });

  return (
    <AuthForm user={user} setUser={setUser}>
      <Button title="Registrar" onPress={handleRegistrar} color="white" />
    </AuthForm>
  );
}
