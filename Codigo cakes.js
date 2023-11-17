import React from 'react';
import { View, Text, Button, ImageBackground, Dimensions, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const window = Dimensions.get('window');

const Stack = createStackNavigator();

function LoginScreen({ navigation }) {
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
      style={{ ...styles.backgroundImage, backgroundColor: 'lightgray' }}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Best Cakes</Text>
        <TextInput
          style={styles.input}
          placeholder="Login"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />
        <Button title="Entrar" onPress={handleWelcome} color="black" />
        <Button title="Cadastre-se" onPress={handleSignUp} color="blue" />
      </View>
    </ImageBackground>
  );
}


function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{
        uri: 'https://img.myloview.com.br/quadros/fundo-rosa-pastel-700-68223953.jpg',
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.homeText}>Bem-vindo ao aplicativo "Best Cakes".</Text>
        <Text style={styles.homeText}>
          Aqui você encontrará os melhores bolos, receitas e preços de Fortaleza!
        </Text>
        <Button title="Próximo" onPress={() => navigation.navigate('Gallery')} color="black" />
      </View>
    </ImageBackground>
  );
}

function GalleryScreen({ navigation }) {
  const cakes = [
    {
      name: 'Bolo de Chocolate',
      image: 'https://www.sabornamesa.com.br/media/k2/items/cache/8097da6161421504ad99a7e5f09e9e69_XL.jpg',
      recipe: `
        Massa:
        - 4 ovos
        - 4 colheres (sopa) de chocolate em pó
        - 2 colheres (sopa) de manteiga
        - 3 xícaras (chá) de farinha de trigo
        - 2 xícaras (chá) de açúcar
        - 2 colheres (sopa) de fermento
        - 1 xícara (chá) de leite
        
        Calda:
        - 2 colheres (sopa) de manteiga
        - 7 colheres (sopa) de chocolate em pó
        - 2 latas de creme de leite com soro
        - 3 colheres (sopa) de açúcar
        
        Onde comprar? 
        La Vila brigaderia-Endereço: Rua - Av. Treze de Abril, 417 - Vila União, Fortaleza - CE, 60411-055
        Telefone: (85) 99709-7502
        Preço Médio em Fortaleza: Entre 50 e 100 Reais
      `,

    },
    {
      name: 'Bolo de Morango',
      image: 'https://img.cybercook.com.br/receitas/12/bolo-de-morango-3.jpeg',
      recipe: 'Receita do bolo de morango...',
    },
    {
      name: 'Bolo de Baunilha',
      image: 'https://bolosparavender.com.br/wp-content/uploads/2019/11/bolo-de-baunilha-com-cobertura-de-lim%C3%A3o.png',
      recipe: `
        Ingredientes:
        - 3 ovos
        - 4 colheres (sopa) de margarina/manteiga
        - 2 xícaras (chá) de açúcar
        - 3 xícaras (chá) de farinha de trigo
        - 1 xícara (chá) de leite
        - 1 colher (sopa) de fermento químico
        - 1 colher (sopa) rasa de baunilha

        Modo de Preparo:
        1. Numa vasilha, adicione os ovos, a margarina/manteiga e o açúcar. Bata bem até obter um creme homogêneo.
        2. Acrescente a farinha de trigo aos poucos, batendo bem, intercalando com o leite.
        3. Adicione a baunilha e mexa bem.
        4. Por último, acrescente o fermento e mexa suavemente.
        5. Leve ao forno preaquecido, em uma forma untada e enfarinhada (a forma que costuma utilizar é uma de buraco no meio, de 26 cm), por 40 minutos a 180/200ºC.
      `,
    },
    {
      name: 'Bolo de Cenoura',
      image: 'https://www.aperitifalafrancaise.com.br/wp-content/uploads/2023/05/como-fazer-bolo-de-cenoura-de-liquidificador.webp',
      recipe: `
        3 ovos
        Qualy
        4 colheres (sopa) de margarina/manteiga
        2 xícaras (cha) de açúcar
        3 xícaras (chá) de farinha de trigo
        1 xícara (chá) de leite
        1 colher (sopa) de fermento químico
        1 colher (sopa) rasa de baunilha

        Modo de preparo: 40min
        1. Numa vasilha adicione os ovos, a margarina/manteiga e o açúcar e bata bem, até ficar um creme homogêneo.
        2. Acrescente a farinha de trigo aos poucos, batendo bem, intercalando com o leite.
        3. Acrescente a baunilha e mexa bem.
        4. Por último, acrescente o fermento e mexa suavemente.
        5. Leve ao forno preaquecido, em uma forma untada e enfarinhada (a forma que costuma utilizar é uma de buraco no meio, de 26 cm), por 40 minutos a 180/200ºC.
      `,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.galleryContainer}>
      <Text style={styles.galleryTitle}>Nossa Galeria de Bolos</Text>
      {cakes.map((cake, index) => (
        <View key={index} style={styles.cakeItem}>
          <Image
            source={{ uri: cake.image }}
            style={styles.cakeImage}
          />
          <Text
            style={styles.cakeName}
            onPress={() => navigation.navigate('Recipe', { cakeIndex: index })}
          >
            {cake.name}
          </Text>
        </View>
      ))}
      <Button
        title="Voltar"

        onPress={() => navigation.navigate('Home')}
        color="black"
        style={{ ...styles.backButton, marginTop: 20 }}
      />
    </ScrollView>
  );
}

function RecipeScreen({ route, navigation }) {
  const { cakeIndex } = route.params;
  const cakes = [
  {
    name: 'Bolo de Chocolate',
    image: 'https://www.sabornamesa.com.br/media/k2/items/cache/8097da6161421504ad99a7e5f09e9e69_XL.jpg',
      recipe: `
        Massa:
        - 4 ovos
        - 4 colheres (sopa) de chocolate em pó
        - 2 colheres (sopa) de manteiga
        - 3 xícaras (chá) de farinha de trigo
        - 2 xícaras (chá) de açúcar
        - 2 colheres (sopa) de fermento
        - 1 xícara (chá) de leite
        
        Calda:
        - 2 colheres (sopa) de manteiga
        - 7 colheres (sopa) de chocolate em pó
        - 2 latas de creme de leite com soro
        - 3 colheres (sopa) de açúcar

        Onde comprar? 
        La Vila brigaderia-Endereço: Rua - Av. Treze de Abril, 417 - Vila União, Fortaleza - CE, 60411-055
        Telefone: (85) 99709-7502
        Preço Médio em Fortaleza: Entre 50 e 100 Reais
      `,
    },
    {
      name: 'Bolo de Morango',
      image: 'https://img.cybercook.com.br/receitas/12/bolo-de-morango-3.jpeg',
      recipe: `
        Ingredientes:
        - 1 xícara (chá) de água
        - 1 xícara (chá) de Nesquick®
        - 4 colheres (sopa) de manteiga
        - 3 ovos
        - 1 e 1/2 xícaras (chá) de açúcar
        - 3 xícaras (chá) de farinha de trigo
        - 1 colher (sopa) de fermento em pó químico
        - Manteiga e farinha de trigo para untar
        - 10 morangos cortados ao meio para decorar

        Cobertura:
        - 1 caixa de morangos picados (300g)
        - 1 xícara (chá) de açúcar
        - Suco de 1 limão

        Modo de Preparo:
        No liquidificador, bata a água, o Nesquick®, a manteiga, os ovos e o açúcar até ficar homogêneo. Transfira para uma tigela, adicione a farinha e o fermento e misture com uma colher. Despeje em uma fôrma de buraco no meio de 30 cm de diâmetro untada e enfarinhada e leve ao forno médio, preaquecido, por 35 minutos ou até dourar. Retire e deixe esfriar. Para a cobertura, em uma panela misture o morango, o açúcar e o suco de limão. Leve ao fogo baixo e deixe levantar fervura. Cozinhe por 5 minutos e deixe esfriar. Desenforme o bolo, cubra com metade da cobertura, arrume os morangos cortados ao meio sobre o bolo e cubra com a cobertura restante. Sirva em seguida.

        Onde comprar:
        Fábrica de Bolo Vó Alzira Fortaleza:Dentro do Assai Atacadista - Av. Mister Hull, 4300 - Loja 22 - Padre Andrade, Fortaleza - CE, 60356-412
        Telefone:(85) 99945-4196
        Preço medio em Fortaleza: 75,90 Reais
      `,
    },
    {
      name: 'Bolo de Baunilha',
      image: 'https://bolosparavender.com.br/wp-content/uploads/2019/11/bolo-de-baunilha-com-cobertura-de-lim%C3%A3o.png',
      recipe: `
        Ingredientes:
        - 3 ovos
        - 4 colheres (sopa) de margarina/manteiga
        - 2 xícaras (chá) de açúcar
        - 3 xícaras (chá) de farinha de trigo
        - 1 xícara (chá) de leite
        - 1 colher (sopa) de fermento químico
        - 1 colher (sopa) rasa de baunilha

        Modo de Preparo:
        1. Numa vasilha, adicione os ovos, a margarina/manteiga e o açúcar. Bata bem até obter um creme homogêneo.
        2. Acrescente a farinha de trigo aos poucos, batendo bem, intercalando com o leite.
        3. Adicione a baunilha e mexa bem.
        4. Por último, acrescente o fermento e mexa suavemente.
        5. Leve ao forno preaquecido, em uma forma untada e enfarinhada (a forma que costuma utilizar é uma de buraco no meio, de 26 cm), por 40 minutos a 180/200ºC.
        Onde comprar:Bolos & Bolinhos- R. Joaquim Nabuco, 1263 - Aldeota, Fortaleza - CE, 60125-055
        Telefone: (85) 98188-9273
        Preço médio em Fortaleza: 45,00 Reias
      `,
    },
    {
      name: 'Bolo de Cenoura',
      image: 'https://www.aperitifalafrancaise.com.br/wp-content/uploads/2023/05/como-fazer-bolo-de-cenoura-de-liquidificador.webp',
      recipe: `
        3 ovos
        Qualy
        4 colheres (sopa) de margarina/manteiga
        2 xícaras (cha) de açúcar
        3 xícaras (chá) de farinha de trigo
        1 xícara (chá) de leite
        1 colher (sopa) de fermento químico
        1 colher (sopa) rasa de baunilha

        Modo de preparo: 40min
        1. Numa vasilha adicione os ovos, a margarina/manteiga e o açúcar e bata bem, até ficar um creme homogêneo.
        2. Acrescente a farinha de trigo aos poucos, batendo bem, intercalando com o leite.
        3. Acrescente a baunilha e mexa bem.
        4. Por último, acrescente o fermento e mexa suavemente.
        5. Leve ao forno preaquecido, em uma forma untada e enfarinhada (a forma que costuma utilizar é uma de buraco no meio, de 26 cm), por 40 minutos a 180/200ºC.
        
        
        Onde comprar:Bolo & Bolo-  R. Capistrano, 44-46 - Rodolfo Teófilo, Fortaleza - CE, 60430-810
        Telefone:(85) 2130-0082
        Preço médio: 65,00 Reais

      `,
  }
  ];

  const cake = cakes[cakeIndex] || {};

  return (
    <ScrollView style={styles.recipeContainer}>
      <Text style={styles.recipeTitle}>{cake.name}</Text>
      <ImageBackground
        source={{ uri: cake.image }}
        style={styles.recipeImage}
      >
        <View style={styles.overlay}>
          {}
        </View>
      </ImageBackground>
      <ScrollView style={styles.recipeTextContainer}>
        <Text style={styles.recipeText}>{cake.recipe}</Text>
      </ScrollView>
      <Button title="Voltar" onPress={() => navigation.goBack()} color="black" style={{ ...styles.backButton, marginTop: 10, paddingVertical: 5, paddingHorizontal: 10, fontSize: 16 }} />
    </ScrollView>
  );
}





const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    height: 40,
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 15,
  },
  loginButton: {
    backgroundColor: '#FF5733',
  },
  homeText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  galleryContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryTitle: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
  },
  cakeItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cakeImage: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
  },
  cakeName: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
  },
  backButton: {
    marginTop: 100,
  },
  recipeContainer: {
    flex: 1,
  },
  recipeImage: {
    height: 250,
  },
  recipeTitle: {
    fontSize: 24,
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
  },
  recipeText: {
    margin: 20,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
