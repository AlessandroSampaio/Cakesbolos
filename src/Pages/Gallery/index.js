import { View, Text, Button, ImageBackground, Dimensions, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import Styles from '../../Styles';

export default function GalleryScreen({ navigation }) {
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
      <ScrollView contentContainerStyle={Styles.galleryContainer}>
        <Text style={Styles.galleryTitle}>Nossa Galeria de Bolos</Text>
        {cakes.map((cake, index) => (
          <View key={index} style={Styles.cakeItem}>
            <Image
              source={{ uri: cake.image }}
              style={Styles.cakeImage}
            />
            <Text
              style={Styles.cakeName}
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
          style={{ ...Styles.backButton, marginTop: 20 }}
        />
      </ScrollView>
    );
  }