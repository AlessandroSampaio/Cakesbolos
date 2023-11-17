import { View, Text, Button, ImageBackground, TextInput } from "react-native";
import Styles from "../../Styles";

export default AuthForm = ({ children, user, setUser }) => {
  function handleNameChange(event) {
    setUser((prev) => ({
      ...prev,
      email: event?.nativeEvent?.text ?? "",
    }));
  }

  function handlePasswordChange(event) {
    setUser((prev) => ({
      ...prev,
      senha: event?.nativeEvent?.text ?? "",
    }));
  }

  return (
    <ImageBackground
      source={{
        uri: "https://us.123rf.com/450wm/ekaterinabaikal/ekaterinabaikal1801/ekaterinabaikal180100602/94460458-bolo-doce-decorado-com-baga-fresca-creme-rosa-e-cobertura-de-chocolate-peda%C3%A7o-de-bolo-cores.jpg?ver=6",
      }}
      style={{ ...Styles.backgroundImage, backgroundColor: "lightgray" }}
    >
      <View style={Styles.overlay}>
        <Text style={Styles.title}>Best Cakes</Text>
        <TextInput
          style={Styles.input}
          placeholder="Email"
          value={user?.email}
          onChange={handleNameChange}
        />
        <TextInput
          style={Styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={user?.senha}
          onChange={handlePasswordChange}
        />
        {children}
      </View>
    </ImageBackground>
  );
};
