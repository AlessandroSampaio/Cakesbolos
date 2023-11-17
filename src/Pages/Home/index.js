import { View, Text, Button, ImageBackground } from 'react-native';
import Styles from '../../Styles';

export default function HomeScreen({ navigation }) {
    return (
      <ImageBackground
        source={{
          uri: 'https://img.myloview.com.br/quadros/fundo-rosa-pastel-700-68223953.jpg',
        }}
        style={Styles.backgroundImage}
      >
        <View style={Styles.overlay}>
          <Text style={Styles.homeText}>Bem-vindo ao aplicativo "Best Cakes".</Text>
          <Text style={Styles.homeText}>
            Aqui você encontrará os melhores bolos, receitas e preços de Fortaleza!
          </Text>
          <Button title="Próximo" onPress={() => navigation.navigate('Gallery')} color="black" />
        </View>
      </ImageBackground>
    );
  }