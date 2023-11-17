import { View, Text, Button, ImageBackground, ScrollView } from 'react-native';
import Styles from '../../Styles';


export default function RecipeScreen({ route, navigation }) {
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
      <ScrollView style={Styles.recipeContainer}>
        <Text style={Styles.recipeTitle}>{cake.name}</Text>
        <ImageBackground
          source={{ uri: cake.image }}
          style={Styles.recipeImage}
        >
          <View style={Styles.overlay}>
            {}
          </View>
        </ImageBackground>
        <ScrollView style={Styles.recipeTextContainer}>
          <Text style={Styles.recipeText}>{cake.recipe}</Text>
        </ScrollView>
        <Button title="Voltar" onPress={() => navigation.goBack()} color="black" style={{ ...Styles.backButton, marginTop: 10, paddingVertical: 5, paddingHorizontal: 10, fontSize: 16 }} />
      </ScrollView>
    );
  }