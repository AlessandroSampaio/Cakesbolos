import { View, Text, Button, ImageBackground, TextInput } from 'react-native';
import Styles from '../../Styles';

export default function LoginScreen({ navigation }) {
    const handleWelcome = () => {
      navigation.navigate('Home');
    }
  
    const handleSignUp = () => {
      // Adicione aqui a navegação para a tela de cadastro
      navigation.navigate('SignUp');
    }
  
    return (
      <ImageBackground
        source={{
          uri: 'https://us.123rf.com/450wm/ekaterinabaikal/ekaterinabaikal1801/ekaterinabaikal180100602/94460458-bolo-doce-decorado-com-baga-fresca-creme-rosa-e-cobertura-de-chocolate-peda%C3%A7o-de-bolo-cores.jpg?ver=6',
        }}
        style={{ ...Styles.backgroundImage, backgroundColor: 'lightgray' }}
      >
        <View style={Styles.overlay}>
          <Text style={Styles.title}>Best Cakes</Text>
          <TextInput
            style={Styles.input}
            placeholder="Login"
          />
          <TextInput
            style={Styles.input}
            placeholder="Senha"
            secureTextEntry={true}
          />
          <Button title="Entrar" onPress={handleWelcome} color="black" />
          <Button title="Cadastre-se" onPress={handleSignUp} color="blue" />
        </View>
      </ImageBackground>
    );
  }