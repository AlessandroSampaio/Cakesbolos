import { Alert, Button } from "react-native";
import RegistraUsuario from "../../firebase/auth";


export default function SignUpScreen() {
  function handleRegistrar() {    
    RegistraUsuario('alessandrosampaio521@gmail.com', 'password')
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Alert.alert('Sucesso', `Deu bom ${user.email}`);        
      })
      .catch((error) => {
        Alert.alert('Faiou', `Deu bom não ${error.code} : ${error.message}`);        
      });
  }

  return (
    <AuthForm>
      <Button title="Registrar" onPress={handleRegistrar} color="white" />
    </AuthForm>
  );
}
